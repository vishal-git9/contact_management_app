import { useQuery } from "@tanstack/react-query"
import { getDateWiseData } from "../api/api"
import { Line } from "react-chartjs-2"
import {
    Chart as chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
}
from "chart.js"

export const Chart = () => {
    const ChartQuery = useQuery({
        queryKey:["data"],
        queryFn:getDateWiseData
    })

    if(ChartQuery.status==="loading") return <h1>Loading...</h1>
    if(ChartQuery.status==="error") return <h1>{JSON.stringify(ChartQuery.error)}</h1>

    // finding out the max and min of cases to show numbers on y-axis of chart
    let min = Infinity
    let max = -Infinity
    const {cases} = ChartQuery.data
    for(const key in cases){
        if(cases[key]>max){
            max = cases[key]
        }
        if(cases[key]<min){
            min = cases[key]
        }
    }
    console.log(ChartQuery.data)
    chartjs.register(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Tooltip
    ) 

    // date to be passed here we have passed cases as the data
    const data = {
        labels:[],
        datasets:[{
            labels:"Cases 2020-23",
            data:cases,
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
            fill: true,    
        }]
    }

    //options to be passed in chart

    const options = {
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || "";
                const value = context.parsed.y || 0;
                return `Cases ${label}: ${value}`;
              },
            },
          },
        },
        scales: {
          y: {
            min: min,
            max: max,
          },
        }
      };
  return (
    <div>
        <h1 className=" font-bold text-lg">World Wide Cases Chart (2020-2023)</h1>
        <Line data={data} options={options}>
        </Line>
        </div>
  )
}

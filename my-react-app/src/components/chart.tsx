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
// interface ChartDataInterface {
//     labels: string[];
//     datasets: {
//       label: string;
//       data: number[];
//       backgroundColor: string;
//       borderColor: string;
//       borderWidth: number;
//       fill: boolean;
//     }[];
//   }

export const Chart = () => {
    const ChartQuery = useQuery({
        queryKey:["data"],
        queryFn:getDateWiseData
    })

    if(ChartQuery.status==="loading") return <h1>Loading...</h1>
    if(ChartQuery.status==="error") return <h1>{JSON.stringify(ChartQuery.error)}</h1>

    let min = Infinity
    let max = -Infinity
    const cases = ChartQuery.data.cases
    for(const key in cases){
        if(cases[key]>max){
            max = cases[key]
        }
        if(cases[key]<min){
            min = cases[key]
        }
    }
    console.log(ChartQuery.data)
    console.log(max)
    console.log(min)

    chartjs.register(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Tooltip
    ) 
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
        World Wide cases (2020-2023)
        <Line data={data} options={options}>

        </Line>
        </div>
  )
}

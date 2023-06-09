import { Chart } from "../components/chart"
import MapWithMarkers from "../components/map"


// dashboard page to show map and chart to the user imported as a seperate component
export const DashboardPage = () => {
  
  return (
    <div>
      <h1>DashboardPage</h1>
      <div className="flex flex-col gap-20 mt-20">
      <Chart/>
      <MapWithMarkers/>
      </div>
    </div>
  )
}

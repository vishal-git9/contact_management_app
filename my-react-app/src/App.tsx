import "./App.css";
import Sidebar from "./components/sidebar";
import { Allroutes } from "./routes/Allroutes";

// importing sidebar and Allroutes to be shown on to the UI
function App() {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-col gap-10 w-9/10">
      <div className=" lg:basis-1/4 sm:4/4">
        <Sidebar />
      </div>
      <div className="basis-3/4 sm:4/4">
        <Allroutes />
      </div>
    </div>
  );
}

export default App;

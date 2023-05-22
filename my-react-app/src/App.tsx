import "./App.css";
import Sidebar from "./components/sidebar";
import { Allroutes } from "./routes/Allroutes";
function App() {
    return (
    <div className="flex flex-row gap-10 w-9/10 ">
      <div className="basis-1/4">
    <Sidebar/>
    </div>
    <div className="basis-3/4">
    <Allroutes/>
    </div>
    </div>
  );
}

export default App;

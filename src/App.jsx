import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
    </BrowserRouter>
    </>
  )
}

export default App;
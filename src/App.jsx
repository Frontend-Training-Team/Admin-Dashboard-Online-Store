import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
      </BrowserRouter>
    </>
  )
}

export default App;
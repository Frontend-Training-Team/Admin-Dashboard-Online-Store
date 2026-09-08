import { useEffect } from "react";
import { patchCancelOrder } from "./api/orders.api";

function App() {
  useEffect(async () => {
    let res = await patchCancelOrder()
    console.log(res.data)
  },[])
  
  return (
    <>
      
    </>
  )
}


export default App;
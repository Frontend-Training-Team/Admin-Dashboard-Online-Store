import { Lock, Mail, Settings, TextAlignJustify } from "lucide-react";
import Btn from "./components/ui/IconButton";
import IconInput from "./components/ui/IconInput";
import Input from "./components/ui/Input";

function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-black flex justify-center items-center font-serif">
        <div className="border p-5">
          <h2 className="text-center text-2xl">font:Lamsa</h2>
          <h2 className="text-center text-2xl font-Serif">fontSerif:Lamsa</h2>
          <h2 className="text-center text-2xl font-Inter">fontInter:Lamsa</h2>
          <div className="flex">
            <Btn Text="Settings" className={"m-5"} Icon={<Settings size={30} />} />
            <Btn Text="account" className={"m-5"} />
            <Btn Text="account" className={"m-5"} />
            <Btn Text="" className={"m-5"} Icon={<TextAlignJustify size={30} />} />
          </div>
          <div className="mb-5">
            <IconInput Icon={<Mail size={28} />} />
          </div>
          <div className="mb-5">
            <Input Type={"password"} />
          </div>
          <IconInput Icon={<Lock size={28} />} />
        </div>
      </div>
    </>
  )
}

export default App;
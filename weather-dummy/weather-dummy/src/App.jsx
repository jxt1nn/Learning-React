import { useRef, useState } from "react"
import Call from "./Call";

function App() {
  const [city , setCity] = useState("");
  const [showCall, setShowCall] = useState(false);
  const userId = useRef("");

  const api_key = "12bb4504758e9f24f16bef147ccc620a";
  const handle = () => {
    const cityValue = userId.current.value;
    setCity(cityValue);
    setShowCall(true);
    userId.current.value = "";
    console.log(cityValue);
  }

  return (
    <>
     <input type="text" ref={userId} placeholder="Enter Your City" />
     <button onClick={handle}>Submit</button>

      {showCall && <Call city={city} apiKey={api_key} />}
    </>
  )
}

export default App

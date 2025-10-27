import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const plus = () =>{
    setCount( pre => pre + 1)
  }

  return (
    <>
      <div className="text-3xl text-amber-600 font-bold " onClick={plus}>holooo</div>
      <div>{count}</div>

    </>
  );
}

export default App;

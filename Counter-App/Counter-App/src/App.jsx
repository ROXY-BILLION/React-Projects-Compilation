import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="div">
      <div className="top">
        <h1>Counter App</h1>
      </div>
      <h2 className="counter">{count}</h2>
      <div className="button">
        <button className="btn" onClick={()=>setCount(count+1)}>
          +
        </button>
        <button className="minus" onClick={()=>setCount(count-1)}>
          -
        </button>
        <button className="reset" onClick={()=>setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default App;
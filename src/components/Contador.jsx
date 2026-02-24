import './Contador.css';
import { useState } from 'react'

function Contador () {
  const [count, setCount] = useState(0)
  

  function incrementar(){
    setCount(prev => prev + 1)
  }
  return (
    <div className="counter-container">
      <h1 className="counter-title">Contador</h1>

      <div className="counter-value">
        {count}       
        </div>

      <div className="counter-buttons">
        <button disabled={(count === 0) ? true : false} onClick={()=>setCount(count-1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}


export default Contador
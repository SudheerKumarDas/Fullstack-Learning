import React, { useState } from 'react'

function CounterFive() {
    const [count, setCount]=useState(0);
    function increaseCounter(){
        setCount(count => count + 5);
    }
    function decreaseCounter(){
        setCount(count => (count-5 < 0 ? 0 : count - 5));
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCounter}>Increase by 5</button>
        <button onClick={decreaseCounter}>Decrease by 5</button>
    </div>
  )
}

export default CounterFive;
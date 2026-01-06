import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount]= useState(10);

    function handleIncrease(){
      setCount(count => count + 1)
    }

    function handleDecrease(){
      setCount(count=> count-1)
    }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default Counter
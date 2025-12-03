import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(prev => prev + 1)}>Increase</button>
        <button onClick={()=> setCount(prev => prev - 1)}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
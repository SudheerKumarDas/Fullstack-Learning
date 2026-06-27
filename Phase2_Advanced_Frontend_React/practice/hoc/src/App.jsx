import { useState } from 'react';

import './App.css'

import { useCounter } from './components/customHooks/useCounter.js'

function App() {

  const {count,increment, decrement, setByValue} = useCounter(0);

  const [inputValue,setInputValue] = useState(0);
  return (
    <div className='m-3 p-3 bg-green-300'>
      <h2 className='m-2 p-2 border-2'>Count : {count}</h2>
      <button onClick={increment} className='m-2 p-2 border-2 cursor-pointer'>Increment</button>
      <button onClick={decrement} className='m-2 p-2 border-2 cursor-pointer'>Decrement</button>
      <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='bg-amber-200 m-2 p-2 border-2' />
      <button onClick={()=>setByValue(inputValue)} className='m-2 p-2 border-2 cursor-pointer'>Set Value</button>
    </div>
  )
}

export default App

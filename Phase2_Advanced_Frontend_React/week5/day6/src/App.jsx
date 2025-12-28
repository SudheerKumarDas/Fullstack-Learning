import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Inside useEffect");
    console.log(count);
  },[count]);

  
  function increaseCount(){
    setCount(count => count + 1);
  }

  return (
    <>
      <div>My Home</div>
      <div>This useEffect renders only once upon mounted.</div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

export default App

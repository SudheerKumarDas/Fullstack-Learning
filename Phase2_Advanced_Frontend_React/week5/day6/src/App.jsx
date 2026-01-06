import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [name, setName]= useState("Batman");

  useEffect(()=>{
    console.log("Inside useEffect");
    console.log(count);
  },[count]);

  useEffect(()=>{
    console.log("name changed");
    console.log("counter changed",counter);
  },[counter, name]);

  function decreaseCounter(){
    setCounter(count => count - 1);
  }
  
  function changedName(){
    setName(name => `${name} is here`)
  }

  function increaseCount(){
    setCount(count => count + 1);
  }

  return (
    <>
      <div>My Home</div>
      <div>This useEffect renders only once upon mounted.</div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
      <button onClick={changedName}>change name</button>
      <h2>{counter}</h2>
      <div>{name}</div>
    </>
  )
}

export default App

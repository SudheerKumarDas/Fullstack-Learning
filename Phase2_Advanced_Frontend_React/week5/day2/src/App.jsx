import { useState } from 'react'
import './App.css'
import PropsEg from './components/PropsEg'
import ChildToParent from './components/ChildToParent';

function App() {
  const [count, setCount] = useState(0);
  const handleMessage=(msg)=>{
    console.log("Received :", msg);
  };

  return (
    <>
        <p>Count : {count}</p>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <PropsEg name="Sudheer Das" age="24"></PropsEg>
        <ChildToParent sendMessage={handleMessage}></ChildToParent>
    </>
  )
}

export default App

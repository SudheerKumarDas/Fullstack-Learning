import './App.css'
import { useEffect, useState } from 'react'
import Tabs from './components/Tabs'
import Todo from './components/Todo'

function App() {
  
  // const [count,setCount]=useState(1);

  // function increaseCount(){
  //   //console.log(`Button is clicked ${count} times`);
  //   console.log("hello hero");
  //   setCount(count => count+1);
  // }
  // // setInterval(increaseCount,1000)
  // // This code causes performance issues because everytime rerenders the app component, a new setInterval is set and like that causes performance issues
  // // So , we use useEffect for these fns and things like sideEffects 
  // // Side effects (timers, API calls, subscriptions) must NOT be inside component body 

  // useEffect(()=>{
  //   setInterval(increaseCount,1000);
  // },[]);
  
  
  
  return (
    <>
      {/* <div>{count}</div>
      <button onClick={increaseCount}>Increase</button> */}

      {/* <Tabs/> */}

      <Todo/>
    </>
  )
}

export default App

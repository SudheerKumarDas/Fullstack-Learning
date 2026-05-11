import { useEffect, useRef, useState } from 'react'
import './App.css'

// function App() {
//   const inputRef = useRef(null); // useRef don't trigger re-render 
//   console.log("re-rendered trigger");
//   function inputFocus(){
//     inputRef.current.focus();
//   }
//   return (
//     <>
//       <input ref={inputRef} type="text" />
//       <button onClick={inputFocus}>Focus</button>
//     </>
//   )
// }

// function App() {
//     const [count, setCount]=useState(0);
//     const prevCountRef = useRef();
//     useEffect(()=>{
//         prevCountRef.current=count;
//     },[count]);
//   return (
//     <>
//       <h2>count : {count}</h2>
//       <h2>Previous Count : { prevCountRef.current }</h2>
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//     </>
//   )
// }

//Demonstrating no re-render 
function App(){
  const countRef = useRef(null);
  const increase = () =>{
    countRef.current++;
    console.log(countRef);
  }
  return(
    <>
        <h2>count: {countRef.current}</h2>
        <button onClick={increase}>Increase</button>
    </>
  )
}

export default App

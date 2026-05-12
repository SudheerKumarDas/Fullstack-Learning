
// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <LightBulb/>
//     </>
//   )
// }

// function LightBulb(){
//     const [bulbOn, setBulbOn]=useState(false);
//   return ( 
//     <div>
//       <LightState bulbOn={bulbOn}/>
//       <ToggleSwitch setBulbOn={setBulbOn}/>
//     </div>
//    )
// }

// function LightState({bulbOn}){
//   return (  
//     <div>
//       {bulbOn ? "Bulb On": "Bulb Off"}
//     </div> 
//   )
// }

// function ToggleSwitch({setBulbOn}){
//   function toggle(){
//       setBulbOn(currentState => !currentState);
//   }
//   return (
//       <>
//         <button onClick={toggle}>Toggle</button>
//       </>
//     )
// }

//props drilling example
function App(){
  const name = "samrat";
  return (
    <>
      <Parent name={name}/>
    </>
  )
}

function Parent(props){
  return ( 
    <div>
      <Child name={props.name}/>
    </div>
   )
}

function Child(props){
  return (
    <div>
      <GrandChild name={props.name}/>
    </div>
  )
}

function GrandChild(props){
  return ( 
  <div>
      <h1>Hello, {props.name} </h1>
  </div> 
  )
}

//solution to prop drilling



 export default App


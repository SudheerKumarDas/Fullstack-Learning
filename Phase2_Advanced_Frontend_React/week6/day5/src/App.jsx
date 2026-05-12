
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <LightBulb/>
    </>
  )
}

function LightBulb(){
    const [bulbOn, setBulbOn]=useState(false);
  return ( 
    <div>
      <LightState bulbOn={bulbOn}/>
      <ToggleSwitch setBulbOn={setBulbOn}/>
    </div>
   )
}

function LightState({bulbOn}){
  return (  
    <div>
      {bulbOn ? "Bulb On": "Bulb Off"}
    </div> 
  )
}

function ToggleSwitch({setBulbOn}){
  function toggle(){
      setBulbOn(currentState => !currentState);
  }
  return (
      <>
        <button onClick={toggle}>Toggle</button>
      </>
    )
}



export default App

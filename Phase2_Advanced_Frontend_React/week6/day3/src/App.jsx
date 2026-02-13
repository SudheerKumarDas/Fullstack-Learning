import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName]=useState("Developer");
  console.log("BUtton rendered!");
  return (
    <>
      <div>
          <h1>Hello, {name}</h1>
          <button onClick={()=>name === "Developer" ? setName("React PRo") : setName("Developer")} style={{padding:"10px"}}> 
            Change Name
          </button>
      </div>
    </>
  )
}

export default App

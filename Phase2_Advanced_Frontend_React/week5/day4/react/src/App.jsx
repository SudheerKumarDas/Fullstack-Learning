import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>My React App</div>
      <PostComponent/>
    </>
  )
}

function PostComponent(){
  const style = {backgroundColor:"white", width:200, borderRadius:10, borderColor:"gray", borderWidth:1}

  return( 
  <div style={style}>
        <img src="www.example.com" alt="display picture" />
  </div>
  )
}

export default App

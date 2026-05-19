import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Link to="/">Allen</Link> |
        <Link to="/neet-program-class11">Class 11</Link> |
        <Link to="/neet-program-class12">Class 12</Link>
          <Routes>
              <Route path='/neet-program-class11' element={<ProgramClass11/>}></Route>
              <Route path='/neet-program-class12' element={<ProgramClass12/>}></Route>
              <Route path='/' element={<Landing/>}></Route>  
          </Routes>      
      </BrowserRouter>
    </>
  )
}

function ProgramClass11(){
  return <h1>Class 11</h1>
}

function ProgramClass12(){
  return <h1>Class 12</h1>
}

function Landing(){
  return <h1>Landing</h1>
}

export default App

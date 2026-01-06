
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Fruits from './pages/Fruits.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>     
        <Navbar></Navbar> 
        <Routes>
          
          {/* <Route path='/blogs' element={<Blogs/>} />
          <Route path='/fruits' element={<Fruits/>} /> */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </>
  )
}

function Home(){
  return <h1>Home Page</h1>
}
function About(){
  return <h1>About</h1>
}
function Contact(){
  return <h1>Contact</h1>
}

export default App

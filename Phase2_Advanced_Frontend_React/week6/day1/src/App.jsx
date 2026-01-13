
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Blogs from './pages/Blogs.jsx'
// import Fruits from './pages/Fruits.jsx'
// import Navbar from './components/Navbar.jsx'

// function App() {

//   return (
//     <>     
//         <Navbar></Navbar> 
//         <Routes>
          
//           {/* <Route path='/blogs' element={<Blogs/>} />
//           <Route path='/fruits' element={<Fruits/>} /> */}
//           <Route path='/' element={<Home/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/contact' element={<Contact/>} />
//         </Routes>
//     </>
//   )
// }

// function Home(){
//   return <h1>Home Page</h1>
// }
// function About(){
//   return <h1>About</h1>
// }
// function Contact(){
//   return <h1>Contact</h1>
// }

// export default App

import { BrowserRouter, Routes, Route , Link, Outlet } from "react-router-dom"

function App(){

  return (
    <div>
        <Routes>
          <Route path="/neet" element={<Layout/>}>
            <Route path="/neet" element={<Landing/>} />
            <Route path="/neet/neet-program-class11" element={<Class11Program/>} />
            <Route path="/neet/neet-program-class12" element={<Class12Program/>} />
            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
    </div>
  )
}

function Class11Program(){
  return (
    <div>Class 11 program</div>
  )
}

function Class12Program(){
  return (
    <div>Class 12 program</div>
  )
}

function Landing(){
  return (
    <div>This is landing page. </div>
  )
}

function Layout(){
return (
  <div>
        <Link to="/neet" >Home</Link> | 
        <Link to="/neet/neet-program-class11">Class 11</Link> | 
        <Link to="/neet/neet-program-class12">class 12</Link>
      <Outlet></Outlet>
      Footer
  </div>
)
}
export default App
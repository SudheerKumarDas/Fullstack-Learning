
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Fruits from './pages/Fruits.jsx'

function App() {

  return (
    <>      
        <Routes>
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/fruits' element={<Fruits/>} />
        </Routes>
    </>
  )
}

export default App

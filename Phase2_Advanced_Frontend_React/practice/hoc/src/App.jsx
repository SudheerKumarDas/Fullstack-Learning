
import './App.css'

import Alpha from './components/Alpha.jsx'
import Beta from './components/Beta.jsx'
import hoc from './components/hoc.jsx'

function App() {
  const WithBorderAlpha = hoc(Alpha);
  const WithBorderBeta = hoc(Beta);

  return (
    <div className='m-3'>
       <WithBorderAlpha/>
       <br />
       <WithBorderBeta/>
    </div>
  )
}

export default App

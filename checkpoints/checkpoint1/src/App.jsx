import './App.css'
import Greetings from './components/Greetings'
import Profile from './components/Profile'

function App() {
  const skills=['html','css','javascript','react'];

  return (
    <>
      <Greetings name="Sudheer"></Greetings>
      <Profile name="Sudheer" skills={skills} profession="Software Engineer"></Profile>
    </>
  )
}

export default App

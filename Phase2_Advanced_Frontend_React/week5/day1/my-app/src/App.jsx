import './App.css'
import Greetings from './components/Greetings'
import Skills from './components/Skills'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
      <div>
        <Greetings name="Sudheer"></Greetings>
        <h1>Hello, Sudheer!</h1>
        <p>Welcome to my React app</p>
        <h2 className="title">Welcome!</h2>
        <p>Your score is {10 + 20}</p>
        <Skills></Skills>
        <ProfileCard name='Samrat' role="Dev" msg="Fullstack web developer since 1998"></ProfileCard>
      </div>
    </>
  )
}

export default App

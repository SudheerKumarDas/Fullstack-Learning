import './App.css'
import ConditionalRender from './components/ConditionalRender';
import Greetings from './components/Greetings'
import UseEffectHook from './components/hooks/UseEffectHook';
import Profile from './components/Profile'

function App() {
  const skills=['html','css','javascript','react'];

  return (
    <>
      {/* <Greetings name="Sudheer"></Greetings>
      <Profile name="Sudheer" skills={skills} profession="Software Engineer"></Profile>
      <ConditionalRender/> */}
      <UseEffectHook></UseEffectHook>
    </>
  )
}

export default App

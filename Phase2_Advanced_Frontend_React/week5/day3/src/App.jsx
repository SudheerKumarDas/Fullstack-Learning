import './App.css'
import Child from './components/Child'
import Counter from '../Counter';
import ThemeSwitcher from '../ThemeSwitcher';

function App() {
  function handleMessage(msg){
      console.log("message from child ,",msg);
  }

  return (
    <>
     <h1>My App</h1>
     <Child sendMessage={handleMessage}></Child>
     <Counter/>
     <ThemeSwitcher></ThemeSwitcher>
    </>
  )
}

export default App

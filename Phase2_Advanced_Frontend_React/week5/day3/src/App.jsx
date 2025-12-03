import './App.css'
import Child from './components/Child'

function App() {
  function handleMessage(msg){
      console.log("message from child ,",msg);
  }

  return (
    <>
     <h1>My App</h1>
     <Child sendMessage={handleMessage}></Child>
    </>
  )
}

export default App

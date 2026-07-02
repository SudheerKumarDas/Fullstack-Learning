
import './App.css'
import { useCounter } from './components/customHooks/useCounter.jsx';
import { useCounterWithValue } from './components/customHooks/useCounterWithValue.jsx';


function App() {
    // const {count, increaseCount} = useCounter();
    const {count,increaseCount,decreaseCount,resetZero}=useCounterWithValue(0);
  return (
    <div>
        {/* <button onClick={increaseCount}>Count {count}</button> */}

        <h1>count: {count}</h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetZero}>Reset</button>
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.css';


function App() {
  // State: [name of the state, setter-function] = useState(initialvalue);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* Events on button */}
      <button onClick={() => {
        setCounter((prevCount) => prevCount + 1)
      }}>+</button>
      
      <h1>{counter}</h1>

      <button onClick={() => {
        setCounter((prevCount) => prevCount - 1)
      }}>-</button>
    </div>
  );
}

export default App;

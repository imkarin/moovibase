import { useState, useEffect } from 'react';
import './App.css';


function App() {
  // State: [name of the state, setter-function] = useState(initialvalue);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Counter changed to ' + counter)
  }, [counter]) // 2nd arg: dependency array. "only rerun if counter changes"
  // the dependency array can be left empty: the effect will run only once (at initial load of component)

  return (
    <div className="App">
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

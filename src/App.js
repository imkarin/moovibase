import './App.css';

// Custom component
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.firstName}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

function App() {
  const name = 'John';

  return (
    <div className="App">
      <Person 
        firstName='John' 
        lastName='Doe' 
        age={27} 
      />
      <Person 
        firstName='Danny' 
        lastName="O'Donoghue" 
        age={25} 
      />
    </div>
  );
}

export default App;

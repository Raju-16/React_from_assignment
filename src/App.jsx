import { useState } from 'react';
import { Form } from './components/Form';
import { ShowEmployee } from './components/data';
// import './App.css';


function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h3>Hello world</h3>
      <Form />
      <ShowEmployee />
      <h2>Employees:{count}</h2>
    </div>
  );
}

export default App;

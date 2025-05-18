import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);    // Here counter is a variable and setCounter is a method, Initial value of counter variable is set to 0.
  // setCounter methods is responsible to update the counter variable. It is not compulsory to use name as setCounter, it is just a convention.

  // So, here using useState hook we can update the state of a variable in react. And now wherever we use this counter variable we can get updated UI value everywhere

  const addValue = () => {
    // console.log("Add Clicked", counter);
    // counter++;   // This wont't update in UI
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if (counter <= 0) {
      console.log("Count cannot be less than 0");
      return;
    }
    else {
      setCounter(counter - 1);
    }
  }

  const resetValue = () => {
    setCounter(0);
    console.log("Value reset");
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>

    </>
  )
}

export default App

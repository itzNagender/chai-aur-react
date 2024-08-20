import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 5

  const addValue = () => { 
    // counter = counter +1
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1)
    
  }

  const removeValue = () => {
    if(counter >= 1)
    setCounter(counter - 1)
    else
      alert("Counter Value can Not to be Less than 0")
  
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      > Add Value  {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value  {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

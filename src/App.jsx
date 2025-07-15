import { useState } from "react"

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [userInput, setUserInput] =  useState({
      initialInvestment: 1000,
      annualInvestment: 2000,
      expectedReturn: 7,
      duration: 10
  })

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue){
      setUserInput((prevUserInput) => {
          return {
              ...prevUserInput,
              [inputIdentifier]: newValue // the '+' forces string to number conversion
          }
      })
  }


  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} userInput={userInput}/>
      {inputIsValid 
        ? <Results userInput={userInput} /> 
        : <p className="center">Enter a duration greater than zero.</p>
      }
    </>
  )
}

export default App

import './App.css'
import { Characters } from './components/character/Characters'
import { useState, useEffect } from 'react'
const App = () => {
  const [loading, setLoading] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [returnedData, setData] = useState(null)

  useEffect (() => {
    if(returnedData === null){
      setIsAnswered(false)
    } else {
      setIsAnswered(true)
    }
  }, returnedData)


  function postData(e) {
    setLoading(true)
    e.preventDefault();
    const inputs = e.target.querySelectorAll(".input"), values = {};
    for(const input of inputs) {
      if(input.type === "checkbox"){
        values[input.name] = input.checked
      } else {
        values[input.name] = input.value
      }
    }

    fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => setData(data))
  }

  return (
    <div className="App">
      {!isAnswered 
      ? 
      <>
        {!loading 
        ? 
        <>
          <span>Which Star Wars character are you?</span>
          <form onSubmit={postData}>
            <select className="input" name="lightsabre" required>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="red">red</option>
            </select>
            <select className="input" name="type" required>
                  <option value="Sith">Sith</option>
                  <option value="Jedi">Jedi</option>
                  <option value="None">Neiter of them</option>
            </select>
            <input className="input" type="checkbox" name="isLiving" />
            <label for="livingThings">I prefer living thing over robots</label>

            <input className="input" type="text" placeholder="email" name="email" required /> 
            <button className="submit" type="submit">Submit</button>
          </form>
        </> 
        : 
        <span>...</span>
        }
        </> 
        : 
        <Characters chars={returnedData}></Characters>
        }
    </div>
  )
}

export default App

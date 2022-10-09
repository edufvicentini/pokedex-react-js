import { useState } from 'react'
import charmander from './assets/charmander.png'
import { GitHub }  from 'react-feather'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={charmander} className="pokemon" alt="Cute Charmander" />
        </a>
      </div>
      
      <h1>Project under construction</h1>
      
      <div className="footer"> 
        <a className="github-link" href='https://github.com/edufvicentini/pokedex-react-js' target="_blank">
          <GitHub className="github-icon"/>  
          <span>Click here to learn more about the project!</span>
        </a>
      </div>
    </div>
  )
}

export default App

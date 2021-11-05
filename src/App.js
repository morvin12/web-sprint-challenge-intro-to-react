import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';


const App = () => {
  const [character, setCharacter] = useState([])

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(res => {
      // console.log(res.data)
      setCharacter(res.data)
    })
    .catch(err => {
      console.error(err)
    })
}, [])






  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;

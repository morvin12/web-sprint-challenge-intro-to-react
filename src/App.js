import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const H1 = styled.h1`
display: flex;
align-items: center;
justify-content: center;
position: relative;
text-transform: uppercase;
text-shadow: -15px 5px 20px;
font-size: 3rem;
margin-bottom: 15%;
`


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
      <H1 className="Header">StarWars Characters</H1>
      {character.map(char => <Character character={char} key={character.url} />)}
    </div>
  );
}

export default App;

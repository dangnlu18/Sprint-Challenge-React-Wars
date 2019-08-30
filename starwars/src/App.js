import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import Stats from './components/stats';



const App = () => {
  const [characterName , setCharacterName] = useState();
  const [characterGender , setCharacterGender] = useState();
  const [characterHairColor, setCharacterHairColor] = useState();
  const [characterMass , setCharacterMass] = useState();
  const [characterHeight , setCharacterHeight] = useState();

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then((resp) => {
        const chars =resp.data.results;
        console.log(chars);
        chars.map((char) => {
          setCharacterName(char.name);
          setCharacterGender(char.gender);
          setCharacterHeight(char.height);
          setCharacterMass(char.mass);
          setCharacterHairColor(char.hair_color);

        });
        
    })
      .catch((err) => console.log(err))
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">

      <h1 className="Header">React Wars</h1>
      <Header name={characterName} />
      <Stats gender={characterGender} height={characterHeight} mass={characterMass} hair_color={characterHairColor}/>


    </div>
  );
}

export default App;

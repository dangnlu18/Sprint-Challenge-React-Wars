import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import Stats from './components/stats';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  border-bottom: dotted 1px black;
`;

const App = () => {
  const [chars , setChar] = useState([]);


  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then((resp) => {
        setChar(resp.data.results);   
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
      <Container>
        {chars.map((person, index) => {
          return (
              <CharacterContainer className="character" key={index}>
                <Header key={index} name={person.name} />
                <Stats key={index+100} gender={person.gender} height={person.height} mass={person.mass} hair_color={person.hair_color} />
              </CharacterContainer>
            )
        })}
      </Container>
    </div>

  );
}

export default App;

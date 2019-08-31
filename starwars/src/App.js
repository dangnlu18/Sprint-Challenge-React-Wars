import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import Stats from './components/stats';



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
console.log(chars)

  return (

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="person">
        {chars.map((person, index) => {
          return (
              <div className="character" key={index}>
                <Header key={index} name={person.name} />
                <Stats key={index+100} gender={person.gender} height={person.height} mass={person.mass} hair_color={person.hair_color} />
              </div>
            )
        })}
      </div>
    </div>

  );
}

export default App;

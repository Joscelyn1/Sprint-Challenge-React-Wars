import React, { useState, useEffect } from 'react';
import axios from "axios";
import PersonCard from "./components/PersonCard.js";
import './App.css';




const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState("");

  useEffect(() => {

    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            // 87 people
            setPeople(res.data.results);
        })
        .catch(err => console.log(err));

    }, []);
    

const arrayPeople = Array.from(people);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div id="card-container">
      {arrayPeople.map(person => (
        <PersonCard  key={person.name} name={person.name} eyecolor={person.eye_color} homeworld={person.homeworld} />
      ))}
      </div>
    </div>
  );
}

export default App;

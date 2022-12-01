import React, { useState } from 'react';

import People from './components/People/People';
import NewPerson from './components/NewPerson/NewPerson';
 
const PEOPLE = [
  { id: '1', firstName: 'Fred',   lastName: 'Flintstone', year: 1961 },    
  { id: '2', firstName: 'Wilma',  lastName: 'Flintstone', year: 1967 },    
  { id: '3', firstName: 'Betty',  lastName: 'Rubble', year: 1969 },    
];

function App() {
  const [people, setPeople] = useState(PEOPLE);

  // Get previous state and add new info
  const addPersonHandler = (person) => {
    setPeople((prevPeople) => {
      return [person, ...prevPeople];
    });
  };


  return (
    <div>
      <NewPerson onAddPerson={addPersonHandler} />
      <People people={people} />
    </div>
  );

}

export default App; 

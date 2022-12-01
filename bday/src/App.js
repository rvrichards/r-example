import React from 'react';

import Person from './components/Person/Person';
 

function App() {
  const persons = [
    { id: '1', firstname: 'Fred',  lastname: 'Flintstone', year: 1961 },    
    { id: '2', firstname: 'Wilma',  lastname: 'Flintstone', year: 1967 },    
    { id: '3', firstname: 'Betty',  lastname: 'Rubble', year: 1969 },    

  ];


  return (
    <div>
      <Person person={persons} />
    </div>
  );

}

export default App;

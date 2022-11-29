import React from 'react';
import PersonForm from './PersonForm';

/* This is a parent component to PersonForm */
/* This is a child component to App */

function Person(props) {
    // const savePersonDataHandler = (enteredPersonData) => {
    function savePersonDataHandler(enteredPersonData) { 
        const personData2 = {
          ...enteredPersonData,
          id: Math.random().toString()
        };
        props.onAddPerson(personData2);
        console.log('P-name-id=' + personData2.name + personData2.id);
        console.log(personData2); //Same as above
      };

    return (
        <div >
        <PersonForm onSavePersonData={savePersonDataHandler}  />
      </div>
    )
}

export default Person;
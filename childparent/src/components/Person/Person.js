import React from 'react';
import PersonForm from './PersonForm';

/* This is a parent component to PersonForm */
/* This is a child component to App */

function Person(props) {
    const savePersonDataHandler = (enteredPersonData) => {
        const personData = {
          ...enteredPersonData,
          id: Math.random().toString()
        };
        props.onAddPerson(personData);
        console.log('P-name-id=' + personData.name + personData.id);
        console.log(personData); //Same as above
      };

    return (
        <div >
        <PersonForm onSavePersonData={savePersonDataHandler}  />
      </div>
    )
}

export default Person;
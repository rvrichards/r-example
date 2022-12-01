import React from 'react';

import PersonForm from './PersonForm';

const NewPerson = (props) => {
  const savePersonDataHandler = (enteredPersonData) => {
    const personData = {
      ...enteredPersonData
    };
    props.onAddPerson(personData);
  };

  return (
    <div className='new-person'>
      <PersonForm onSavePersonData={savePersonDataHandler} />
    </div>
  );
};

export default NewPerson;

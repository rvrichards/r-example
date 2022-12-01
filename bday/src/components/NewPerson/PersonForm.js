import React from 'react';
import {useState} from 'react';

function PersonForm(props) {
  const [enteredFirstName, setFirstName] = useState('');
  const [enteredLastName, setLastName] = useState('');
  const [enteredYear, setYear] = useState('');

  function firstnameChangeHandler(event) {
    // console.log("Entered firstname:" + event.target.value);
    setFirstName(event.target.value);
  }
  function lastnameChangeHandler(event) {
    // console.log("Entered lastname:" + event.target.value);
    setLastName(event.target.value);
  }
  function yearChangeHandler(event) {
    // console.log("Entered year:" + event.target.value);
    setYear(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const personData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      year: enteredYear,
    };

    props.onSavePersonData(personData);
    console.log("Inside submit");
    console.log('Name: ' + enteredFirstName + ' ' + enteredLastName + 
                ' age: ' + enteredYear);
    setLastName('Rubble');
    setFirstName('');
    setYear('');
  };

  return (
      <form onSubmit={submitHandler}>
        <h2>This is PersonForm</h2>
        <div className='new-person-controls'>
          <div >
            <label>The First Name</label>
            <input type='text' 
                   value={enteredFirstName}
                   onChange={firstnameChangeHandler}/>
          </div>
          <div >
            <label>The Last Name</label>
            <input type='text' 
                   value={enteredLastName}
                   onChange={lastnameChangeHandler}/>
          </div>
          <div >
            <label>The Year</label>
            <input type='text' 
                   value={enteredYear}
                   onChange={yearChangeHandler}/>
          </div>          
          <div className='new-person-actions'>
            <button type='submit'>Add Person</button>
          </div>
        </div>
      </form>
    );
}

export default PersonForm;
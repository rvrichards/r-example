import React from 'react';
import {useState} from 'react';

function PersonForm(props) {
  const [enteredFirstName, setFirstName] = useState('');
  const [enteredLastName, setLastName] = useState('');
  const [enteredYear, setYear] = useState('');

  function firstnameChangeHandler(event) {
    console.log("Entered firstname:" + event.target.value);
    setFirstName(event.target.value);
  }
  function lastnameChangeHandler(event) {
    console.log("Entered lastname:" + event.target.value);
    setLastName(event.target.value);
  }
  function yearChangeHandler(event) {
    console.log("Entered year:" + event.target.value);
    setYear(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
qwerty
    // console.log("You submitted: " + userInput.enteredFirst + ' ' 
    //                               + userInput.enteredLast + ' age: ' 
    //                               + userInput.enteredAge);
    setUserInput(() => {
      return { enteredFirst: '', 
               enteredLast: '',
               enteredAge: '666' };
    });
  };

  return (
      <form onSubmit={submitHandler}>
        <h2>This is the PersonForm</h2>
        <div className='new-person-controls'>
          <div className='new-person-control'>
            <label>The First Name</label>
            <input type='text' onChange={firstnameChangeHandler}/>
          </div>
          <div className='new-person-control'>
            <label>The Last Name</label>
            <input type='text' onChange={lastnameChangeHandler}/>
          </div>
          <div className='new-person-control'>
            <label>The Year</label>
            <input type='text' onChange={yearChangeHandler}/>
          </div>          
          <div className='new-person-actions'>
            <button type='submit'>Add Person</button>
          </div>
        </div>
      </form>
    );
}

export default PersonForm;
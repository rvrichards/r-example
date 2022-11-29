import React, { useState } from 'react';

function PersonForm(props) {
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredName, setEnteredName] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const personData = {
            name: enteredName,
            age: enteredAge,
        }
        props.onSavePersonData(personData);
        console.log("PF-state: " + enteredName + ' ' + enteredAge);
        console.log(personData);  //Same as above
    };


    return (
        <form onSubmit={submitHandler}>
            <label>Age:</label>
            <input type='text' value={enteredAge}
                   onChange={ageChangeHandler}
            />
            <label>Name:</label>
            <input type='text' value={enteredName}
                   onChange={nameChangeHandler}
            />
            <button type='submit'>Add Person</button>
        </form>
    )
}

export default PersonForm;
import React from 'react';
// import {useState} from 'react';

function Person(props) {
    // const [enteredFirstName, setFirstName] = useState('');
    // const [enteredLastName, setLastName] = useState('');
    // const [enteredYear, setYear] = useState('');

    // function firstnameChangeHandler(event) {
    //     console.log("Entered firstname:" + event.target.value);
    //     setFirstName(event.target.value);
    //   }
    //   function lastnameChangeHandler(event) {
    //     console.log("Entered lastname:" + event.target.value);
    //     setLastName(event.target.value);
    //   }
    //   function yearChangeHandler(event) {
    //     console.log("Entered year:" + event.target.value);
    //     setYear(event.target.value);
    //   }

    return (
        <div>
            <h2>People</h2>
            {props.person[0].firstname} {props.person[0].lastname} born in {props.person[0].year}
            <h3>Next</h3>
            {props.person[1].firstname} {props.person[1].lastname} born in {props.person[1].year}
            <h4>Last</h4>
            {props.person[2].firstname} {props.person[2].lastname} born in {props.person[2].year}
            
        </div>

    )
}

export default Person
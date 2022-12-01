import React  from 'react';
import Person from './Person';
import Card from '../UI/Card';


function People(props) {
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
            <Card className='people'>
            {props.people.map((person) => (
                <Person
                    firstName={person.firstName}
                    lastName={person.lastName}
                    year={person.year}
                />
                ))}
            </Card>
        </div>

    )
}

export default People;
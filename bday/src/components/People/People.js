import React  from 'react';
import Person from './Person';
import Card from '../UI/Card';


function People(props) {
    console.log("People-props:" + JSON.stringify(props));
    return (
        <div>
            <Card className='people'>
            {props.people.map((person) => (
                <Person
                    key={person.id}  // doesn't pass thru?
                    id={person.id}
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

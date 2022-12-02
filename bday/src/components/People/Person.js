import React from 'react';
import Card from '../UI/Card';

const Person = (props) => {

  // console.log("Person-props="+JSON.stringify(props));

  return (
    <Card className='person-name'>
        <div>
            Person: {props.id} - {props.firstName} {props.lastName} {props.year}
        </div>
    </Card>
  );
}

export default Person;

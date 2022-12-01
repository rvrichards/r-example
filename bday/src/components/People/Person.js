import React from 'react';

import Card from '../UI/Card';

const Person = (props) => {
  return (
    <Card className='person-name'>
        <div>
            Person: {props.firstName} {props.lastName} {props.year}
        </div>
    </Card>
  );
}

export default Person;

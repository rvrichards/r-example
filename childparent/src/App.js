import './App.css';
import Person from './components/Person/Person';

/* This will show the passing of information from child-> parent.
   in this case we have three levels:
      App <-- Person <-- PersonForm
   Therefore we are passing up two levels, to a grandparent.
*/

function App() {
  console.log('In parent: Let us roll!');
  // const people = [
  //   { name: 'albert',  age: 42 },
  //   { name: 'bob',  age: 66 },
  // ];

  /* This is getting data from child component: Person */
  function addPersonHandler(people) {
    console.log('App-people:' + people.id);
    console.log( people);
  };
  
  return (
    <div>
      <Person onAddPerson={addPersonHandler} />
    </div>
  );
}

export default App;

import React, { Component} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Persons/Cockpit/Cockpit';


// const App = props => {

//   // using destructuring
//    const [this.state, setPersonsState] = useState({
//       persons: [
//         {name: 'Max', age: 28},
//         {name: 'Manu', age:29},
//         {name: 'Stephanie', age:26}
//       ]
//     });

//     // separating the states when using useState so that the function
//     // only replaces part of the state and not the whole

//     const[otherState, setOtherState] = useState('some other value');
//     console.log(this.state,otherState);
//     // using setPersonsState replaces and not merges states

//     const switchNameHandler = () => {
//       setPersonsState({persons: [
//         {name: 'Maximiliam', age: 28},
//         {name: 'Manu', age:29},
//         {name: 'Stephanie', age:27}
//       ]
      
//     });
//     }


class App extends Component {

  state = {
    persons: [
      {id: 'qwewq', name: 'Max', age: 28},
      {id: 'asdas', name: 'Manu', age:29},
      {id: 'assss', name: 'Stephanie', age:26}
    ],
     otherState: 'some other value',
     showPersons: false
  }

  

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();// gets you a copy of the array when no args
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (id,event) => {
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id === id;
      }
    )

    // Spread operators to copy all the properties
    // rather than using the object itself
    const person = {...this.state.persons[personIndex]};
    //OR
    // const person = Object.assing({}, this.state.persons[personIndex]);

    // working only with copies instead of the objects themselves

    person.name  = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons})
  }

  togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
  }

    // Bind over setting up as a function
    render() {

      let persons = null;


      if(this.state.showPersons){
        persons = (
          <div>

            <Persons persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />

          </div>
        );
      }

      

      return (
        <div className={classes.App}>
          <Cockpit 
            title = {this.props.appTitle}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}/>
          {persons}
        </div>
      )
    }
    //return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Does this work now?'));
  
}

export default App;

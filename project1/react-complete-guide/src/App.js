import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';


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
      //inline styles
      const style= {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover' : {
          backGroundColor: 'lightgreen',
          color: 'black'
        }
      }

      let persons = null;

      if(this.state.showPersons){
        persons = (
          <div>
              {this.state.persons.map((person, index) => {
                return(
                  <Person
                    name = {person.name}
                    age = {person.age}
                    click = {() => {this.deletePersonHandler(index)}}
                    //Keys make it more efficient so that the DOM
                    //recognizes which element to update
                    key={person.id}
                    changed={this.nameChangedHandler.bind(this,person.id)} />
                    
                );
              })}
          </div>
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'lightred',
            color: 'black'
        }
      }

      const classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red'); // classes = ['red']
      }

      if(this.state.persons.length <= 1){
        classes.push('bold'); // classes = ['red','bold']
      }




      return (
        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p className={classes.join(' ')}> This is really working!</p>
          <button className="button"
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      )
    }
    //return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Does this work now?'));
  
}

export default App;

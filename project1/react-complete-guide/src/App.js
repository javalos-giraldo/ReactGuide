import React, { Component , useState} from 'react';
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
      {name: 'Max', age: 28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26}
    ],
     otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:27}
    ]})
    //console.log('HELLO WORLD');
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Manu', age: 28},
      {name: event.target.value, age:29},
      {name: 'Stephanie', age:26}
    ]})
  }

    // Bind over setting up as a function
    render() {
      //inline styles
      const style= {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p> This is really working!</p>
          <button
            style={style}
            onClick={() => this.switchNameHandler('Maximiliam!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name ={this.state.persons[1].name} age= {this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>
              My Hobbies: Racing</Person>
          <Person 
            name = {this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      );
    };
    //return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Does this work now?'));
  
}

export default App;

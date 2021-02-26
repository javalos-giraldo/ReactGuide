import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {

  state = {
    users: [
      {username: "javalos"},
      {username: "lopez123"},
      {username: "Matt111"}
    ]
  }

  userNameChangedHandler = (element,event) => {
    this.setState({
      users: [
        {username:  element === 0? event.target.value : this.state.users[0].username},
        {username: element === 1? event.target.value : this.state.users[1].username},
        {username:  element === 2? event.target.value : this.state.users[2].username }
      ]
    }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>First basics Assignment</h1>
        <UserInput username={this.state.users[0].username} changed ={this.userNameChangedHandler.bind(this,0)}/>
        <UserOutput username={this.state.users[0].username} />
        <UserInput username={this.state.users[1].username} changed ={this.userNameChangedHandler.bind(this,1)}/>
        <UserOutput username={this.state.users[1].username}/>
        <UserInput username={this.state.users[2].username} changed ={this.userNameChangedHandler.bind(this,2)}/>
        <UserOutput username= {this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;

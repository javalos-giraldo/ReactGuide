import React, {Component} from 'react'
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'
import clasess from './test.module.css'
import './App.css';

class App extends Component{
  state = {
    textInput: ''
  }

  updateTextHandler = (event) => {
    const newText = event.target.value;
    this.setState({
      textInput: newText
    });
  }

  deleteCharacterHandler = (index) => {
    const newTextInput = this.state.textInput.split('');
    newTextInput.splice(index,1);
    this.setState({
      textInput: newTextInput.join('')
    })
    
  }


  render() {

    let characters = (
      <div >
      {this.state.textInput.split('').map((element,index) => {
        return(
          <CharComponent character={element} clicked={() => {this.deleteCharacterHandler(index)}}/>
        )
      })}
      </div>
    )

    return (
      <div className="App">
        <div className={clasess.background}>
          <input type="text"  value={this.state.textInput} onChange={(event) => {this.updateTextHandler(event)}}/>
          <p>The string "{this.state.textInput}" has a Length of {this.state.textInput.length} </p>
          <ValidationComponent textLength={this.state.textInput.length}/>
          {characters}
        </div>
        
      </div>
    );
  }
  
}

export default App;

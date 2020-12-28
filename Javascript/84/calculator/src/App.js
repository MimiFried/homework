import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    inputText: '0',
    lastSavedAdd: '',
    lastSavedSub: ''
  }

  calculate(num) {
    if (num === '+') {
      this.setState({
      lastSavedAdd: this.state.inputText,
      inputText: ''
      });
    } 
    else if (num === '-') {
      this.setState({
      lastSavedSub: this.state.inputText,
      inputText: ''
      });
    } 
    else if (num === '=') {
      if(this.state.lastSavedAdd !== '') {
        this.setState({
        inputText: Number(this.state.inputText) + Number(this.state.lastSavedAdd),
        lastSavedAdd: ''
        });
      }
      else {
        this.setState({
        inputText: Number(this.state.lastSavedSub) - Number(this.state.inputText),
        lastSavedSub: ''
        });
      }
    }
    else if (num === 'C'){
      this.setState({
        inputText: ''
      });
    }
    else {
      this.setState({
        inputText: this.state.inputText + num
      });
    }
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.inputText}></input>

        <table className="buttons">
          <tr>
            <td><button onClick={() => this.calculate(7)}>7</button></td>
            <td><button onClick={() => this.calculate(8)}>8</button></td>
            <td><button onClick={() => this.calculate(9)}>9</button></td>
            <td><button onClick={() => this.calculate('C')}>C</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.calculate(4)}>4</button></td>
            <td><button onClick={() => this.calculate(5)}>5</button></td>
            <td><button onClick={() => this.calculate(6)}>6</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.calculate(1)}>1</button></td>
            <td><button onClick={() => this.calculate(2)}>2</button></td>
            <td><button onClick={() => this.calculate(3)}>3</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.calculate(0)}>0</button></td>
            <td><button onClick={() => this.calculate('-')}>-</button></td>
            <td><button onClick={() => this.calculate('+')}>+</button></td>
            <td><button onClick={() => this.calculate('=')}>=</button></td>
          </tr>
        </table>
      </div>
    );
  }
}



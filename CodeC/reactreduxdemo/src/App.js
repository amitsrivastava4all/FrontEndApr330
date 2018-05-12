import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {One} from './components/one';
import Two from './components/two';


class App extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Example</h1>
        <One/>
        <br/>
        <hr/>
        <br/>
        <Two/>
      </div>
    );
  }
}

export default App;

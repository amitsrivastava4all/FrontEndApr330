import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import User from './components/users/user';
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shop Demo</h1>
        <User/>
      </div>
    );
  }
}

export default App;

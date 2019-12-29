import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import './App.css';



class App extends Component {

  render() {
    return (
    <div className="App">
      <Navbar />
      <Register />
      <Signin />
    </div>
    );
  }
}

export default App;

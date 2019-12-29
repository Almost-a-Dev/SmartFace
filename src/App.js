import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import SmartFace from './components/SmartFace/SmartFace';
import './App.css';

const initState = {
  route: 'signin',
  isSigned: false
}

class App extends Component {

  constructor() {
    super();
    this.state = initState;
  }

  urlChange = (route) => {
    if (route === 'signout') {
      this.setState(initState)
    } else if (route === 'home') {
      this.setState({isSigned: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSigned, route } = this.state;
    return (
    <div className="App">
      <Navbar isSigned={isSigned} urlChange={this.urlChange}/>
      { route === 'home'
        ? <SmartFace />
        : (
          route === 'signin'
            ? <Signin urlChange={this.urlChange}/>
            : <Register urlChange={this.urlChange}/>
        )
      }
    </div>
    );
  }
}

export default App;

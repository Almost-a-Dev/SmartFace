import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import SmartFace from './components/SmartFace/SmartFace';
import ImageForm from './components/ImageForm/ImageForm';
import './App.css';

//Default App state
const initState = {
  route: 'signin',
  isSigned: false,
  input: ''
}

class App extends Component {

  constructor() {
    super();
    this.state = initState;
  }

  //Harcoded routing react, will be changed later, just for test...
  urlChange = (route) => {
    if (route === 'signout') {
      this.setState(initState)
    } else if (route === 'home') {
      this.setState({isSigned: true})
    }
    this.setState({route: route});
  }

  //catch the input from the input of ImageForm component...
  catchInput = (event) => {
    this.setState({input: event.target.value});
  }

  //Submiting a image for the API, this will be code later, it's just to test that works for now :)
  submitImage = () => {
    console.log(`I'm submit and my state is ${this.state.input}`);
  }

  render() {
    const { isSigned, route } = this.state;
    return (
    <div className="App">
      <Navbar isSigned={isSigned} urlChange={this.urlChange}/>
      { route === 'home'
        ? <div>
          <ImageForm 
            catchInput={this.catchInput}
            submitImage={this.submitImage}
          />
          <SmartFace input={this.state.input}/>
        </div> 
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

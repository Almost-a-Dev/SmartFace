import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import SmartFace from './components/SmartFace/SmartFace';
import ImageForm from './components/ImageForm/ImageForm';
import './App.css';

import Clarifai from 'clarifai';

//Default App state
const initState = {
  route: 'signin',
  isSigned: false,
  input: '',
  imageLink: '',
  faceSqr: {}
}

//constant for Clarifai API
const app = new Clarifai.App({
  apiKey: 'af7da72e85c7490e806298686f3277dd'
});

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

  squareFace = (squareBox) => {
    this.setState({faceSqr: squareBox})
  }

  detectFace = (arr) => {
    const face = arr.outputs[0].data.regions[0].region_info.bounding_box;
    const imageId = document.getElementById('imageTag');
    return {
      leftColumn: face.left_col * Number(imageId.width),
      rightColumn: Number(imageId.width) - (face.right_col * Number(imageId.width)),
      topRow: face.top_row * Number(imageId.height),
      bottomRow: Number(imageId.height) - (face.bottom_row * Number(imageId.height)),
    }
  } 

  //Submiting a image for the API, this will be code later, it's just to test that works for now :)
  submitImage = () => {
    this.setState({imageLink : this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(res => this.squareFace(this.detectFace(res)))
    .catch(err => console.log(err))
  }

  render() {
    const { isSigned, route, imageLink, faceSqr } = this.state;
    return (
    <div className="App">
      <Navbar isSigned={isSigned} urlChange={this.urlChange}/>
      { route === 'home'
        ? <div>
          <ImageForm 
            catchInput={this.catchInput}
            submitImage={this.submitImage}
          />
          <SmartFace 
            imageLink={imageLink}
            faceSqr={faceSqr}
            />
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

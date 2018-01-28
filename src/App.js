import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

//Initialize Firebase
var config = {
    apiKey: "AIzaSyAG5Z-iLt6S_tffcQkoz4-abqj2xrM-I-s",
    authDomain: "blocchatdms.firebaseapp.com",
    databaseURL: "https://blocchatdms.firebaseio.com",
    projectId: "blocchatdms",
    storageBucket: "blocchatdms.appspot.com",
    messagingSenderId: "1034090268345"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

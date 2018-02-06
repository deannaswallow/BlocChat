import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: ''
    };
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room.key });
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom.bind(this)}
            />
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            />
        </main>
      </div>
    );
  }
}

export default App;

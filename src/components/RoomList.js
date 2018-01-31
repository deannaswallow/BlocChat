import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  handleNameChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  createRoom(e) {
    const newRoomName = this.state.newRoomName;
    this.roomsRef.push({ name: newRoomName });
    e.preventDefault();
    this.state.newRoomName = '';
  }

  render() {
    return (
      <div className="RoomList">
        <ul>
          {this.state.rooms.map( (room, index) =>
            <li key={index}>{room.name}</li>
           )
          }
        </ul>
        <form className="create-room-form"
        onSubmit={(e) => this.createRoom(e) }>
          <label>Enter New Room Name Here:
            <input type="text"
            value={this.state.newRoomName}
            onChange={(e) => this.handleNameChange(e) }/>
          </label>
          <input type="submit" value="Create Room" />
        </form>
      </div>
    );
  }
}

export default RoomList;

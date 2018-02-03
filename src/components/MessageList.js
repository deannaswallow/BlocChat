import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: ''
    };

    this.msgRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.msgRef.on('child_added', snapshot => {
      const msg = snapshot.val();
      msg.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(msg) });
    });
  }

  render() {
    return(
      <div>Message List Goes Here</div>
    );
  }
}

export default MessageList;
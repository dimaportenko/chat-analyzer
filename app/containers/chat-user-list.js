/**
 * Created by troublesohard on 5/18/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setScreen, ScreenTypes } from './../actions/screens';
import UserRow from './../components/user-row';

class ChatUserList extends Component {

  handleClick() {
    this.props.setScreen(ScreenTypes.dialogsList);
  }

  userSelect(uid) {
    console.log(uid);
    this.props.setScreen(ScreenTypes.analyze);
  }

  renderUsersRows() {
    const chat = this.props.chats[this.props.chatId];
    return chat.users.map(user => {
      return (<UserRow
        key={user.uid}
        uid={user.uid}
        onClick={this.userSelect.bind(this)}
        image={user.photo_50}
        firstName={user.first_name}
        lastName={user.lastName}
      />);
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary btn-sm btn-back"
          onClick={this.handleClick.bind(this)}
        >
          &larr; Back
        </button>
        <p className="screen-label">Собеседники</p>
        <table className="table table-hover">
          <tbody className="dialog-table-body">
            {this.renderUsersRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    chatId: state.selectedDialog.id
  };
}

export default connect(mapStateToProps, { setScreen })(ChatUserList);

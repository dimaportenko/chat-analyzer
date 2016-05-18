/**
 * Created by troublesohard on 4/27/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDialogs } from './../actions/dialogs';
import { fetchUsers } from './../actions/users';
import { fetchChats } from './../actions/chats';
import DialogItem from './dialog-item';
import ChatItem from './chat-item';


class DialogList extends Component {

  componentWillMount() {
    const { dialogs } = this.props;
    if (!dialogs || !dialogs.length) {
      this.props.fetchDialogs();
    }
  }

  fetchData() {
    const { dialogs } = this.props;
    if (!dialogs) {
      return;
    }
    const chatIds = [];
    const userIds = [];
    const { length } = dialogs;
    let dialog = null;
    for (let i = 0; i < length; ++i) {
      dialog = dialogs[i];
      if (dialog.chat_id) {
        chatIds.push(dialog.chat_id);
      } else if (dialog.uid) {
        userIds.push(dialog.uid);
      }
    }

    if (userIds.length) {
      this.props.fetchUsers(userIds);
    }
    if (chatIds.length) {
      this.props.fetchChats(chatIds);
    }
  }

  renderDialogs() {
    this.fetchData();

    return this.props.dialogs.map(dialog => {
      if (dialog.chat_id) {
        return (
          <ChatItem dialog={dialog} key={dialog.chat_id} />
        );
      } else if (dialog.uid) {
        return (
          <DialogItem dialog={dialog} key={dialog.uid} />
        );
      }
    });
  }

  render() {
    const { dialogs } = this.props;
    if (!dialogs || !dialogs.length) {
      return <div className="loader" />;
    }
    return (
      <div>
        <p className="screen-label">Диалоги</p>
        <table className="table table-hover">
          <tbody className="dialog-table-body">
            { this.renderDialogs() }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { dialogs: state.dialogs };
}

export default connect(mapStateToProps, { fetchDialogs, fetchUsers, fetchChats })(DialogList);

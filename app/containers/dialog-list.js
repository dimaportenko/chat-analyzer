/**
 * Created by troublesohard on 4/27/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDialogs } from './../actions/dialogs';
import { fetchUsers } from './../actions/users'
import { fetchChats } from './../actions/chats'
import DialogItem from './dialog-item';
import ChatItem from './chat-item';


class DialogList extends Component {

    componentWillMount() {
        console.log('Dialog list componentWillMount');
        this.props.fetchDialogs();
    }

    fetchData() {
      //debugger;
      const { dialogs } = this.props;
      if ( !dialogs ) {
        return;
      }
      let chatIds = [];
      let userIds = [];
      const { length } = dialogs;
      let dialog = null;
      for (var i = 0; i < length; ++i) {
        dialog = dialogs[i];
        if(dialog.chat_id) {
          chatIds.push(dialog.chat_id);
        } else if(dialog.uid) {
          userIds.push(dialog.uid);
        }
      }

      if(userIds.length) {
        this.props.fetchUsers(userIds);
      }
      if(chatIds.length) {
        this.props.fetchChats(chatIds);
      }
    }

    renderDialogs() {
      this.fetchData();

      return this.props.dialogs.map(dialog => {
        if(dialog.chat_id) {
          return (
            <ChatItem dialog={dialog} key={dialog.chat_id} />
          );
        } else if(dialog.uid) {
          return (
            <DialogItem dialog={dialog} key={dialog.uid} />
          );
        } else {
          return '';
        }
      });
    }

    render() {
        return (
            <table className="table table-hover">
              <tbody>
                { this.renderDialogs() }
              </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
  return { dialogs: state.dialogs}
}

export default connect(mapStateToProps, { fetchDialogs, fetchUsers, fetchChats })(DialogList);

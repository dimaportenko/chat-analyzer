/**
 * Created by troublesohard on 5/13/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users'
import { fetchChat } from './../actions/chats'


class DialogItem extends Component {

  //var isChat = false;

  componentWillMount() {
    const { dialog, users } = this.props;
    if (dialog.chat_id) {
      this.isChat = true;
      this.props.fetchChat(dialog.chat_id);
    } else {
      const { uid } = dialog;
      this.props.fetchUsers([uid]);
    }
  }

  renderChatImage() {
    //debugger;
    var images = [];
    const { dialog, chats } = this.props;
    if (dialog.photo_50) {
      return <img src={dialog.photo_50} className="avatar-50" />;
    } else if(chats && chats[dialog.uid]) {
      console.log('CHAT IMAGWA !!!!!!!!!!!!!!!!!');
      const chat = chats[dialog.uid];
      const { users } = chat;
      var length = users.length;
      length = (length > 4) ? 4 : length;
      for (var i = 0; i < length; ++i) {
        console.log(users[i].photo_50);
        images.push(users[i].photo_50);
      }

      return (
        <div className={`image-container-${length}`}>
          {
            images.map(image => {
              return <img src={image} className="avatar-50" />;
            })
          }
        </div>
      )
    } else {
      return '';
    }
  }

  render() {
    const { dialog } = this.props;
    if (this.isChat) {

      return (
        <li className="list-group-item" >
          { this.renderChatImage() }
          { dialog.title }
        </li>
      );
    } else {
      const user = this.props.users[dialog.uid];
      if(user) {
        return (
          <li className="list-group-item" >
            <img src={user.photo_50} className="avatar-50" />
            {user.first_name} {user.last_name}
          </li>
        );
      } else {
        return (
          <li className="list-group-item" >Loading...</li>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  //console.log('CHATS');
  //console.log(state.chats);
  return {
    users: state.users,
    chats: state.chats
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchChat })(DialogItem);

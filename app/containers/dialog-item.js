/**
 * Created by troublesohard on 5/13/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users'


class DialogItem extends Component {

  //var isChat = false;

  componentWillMount() {
    const { dialog, users } = this.props;
    if (dialog.chat_id) {
      this.isChat = true;
    } else {
      const { uid } = dialog;
      this.props.fetchUsers([uid]);
    }
  }

  render() {
    const { dialog } = this.props;
    if (this.isChat) {
      return (
        <li className="list-group-item" >
          <img src={dialog.photo_50 ? dialog.photo_50 : ''} className="avatar-50" />
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
  return { users: state.users}
}

export default connect(mapStateToProps, { fetchUsers })(DialogItem);

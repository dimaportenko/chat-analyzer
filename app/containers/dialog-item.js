/**
 * Created by troublesohard on 5/13/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class DialogItem extends Component {

  //componentWillMount() {
  //  const { dialog} = this.props;
  //  //this.props.fetchUsers([dialog.uid]);
  //}

  render() {
    const { dialog } = this.props;
    const user = this.props.users[dialog.uid];
    if(user) {
      return (
        <tr>
          <td>
            <img src={user.photo_50} className="avatar-50" />
          </td>
          <td>
            {user.first_name} {user.last_name}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            Loading...
          </td>
        </tr>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(DialogItem);

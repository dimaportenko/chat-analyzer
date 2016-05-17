/**
 * Created by troublesohard on 5/13/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';



class ChatItem extends Component {

  renderChatImage() {
    var images = [];
    const { dialog, chats } = this.props;
    const chat = chats[dialog.chat_id];

    if (dialog.photo_50) {
      return <img src={dialog.photo_50} className="avatar-50" />;
    } else if(chats && chat) {
      const { users } = chat;
      var length = users.length;
      length = (length > 4) ? 4 : length;
      for (var i = 0; i < length; ++i) {
        images.push(users[i].photo_50);
      }

      var imageNumber = 0;
      return (
        <div className={`image-container-${length}`}>
          {
            images.map(image => {
              ++imageNumber;
              return <img src={image} className={`avatar-50 img-${imageNumber}`} key={imageNumber} />;
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
    return (
      <tr>
        <td>
          { this.renderChatImage() }
        </td>
        <td>
          { dialog.title }
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats
  }
}

export default connect(mapStateToProps)(ChatItem);

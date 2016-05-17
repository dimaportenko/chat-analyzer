/**
 * Created by troublesohard on 5/13/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setScreen, ScreenTypes } from './../actions/screens';


class ChatItem extends Component {

  renderChatImage() {
    const images = [];
    const { dialog, chats } = this.props;
    const chat = chats[dialog.chat_id];

    if (dialog.photo_50) {
      return <img alt="Chat" src={dialog.photo_50} className="avatar-50" />;
    } else if (chats && chat) {
      const { users } = chat;
      let length = users.length;
      length = (length > 4) ? 4 : length;
      for (let i = 0; i < length; ++i) {
        images.push(users[i].photo_50);
      }

      let imageNumber = 0;
      return (
        <div className={`image-container-${length}`}>
          {
            images.map(image => {
              ++imageNumber;
              return (
                <img alt="Chat"
                  src={image}
                  className={`avatar-50 img-${imageNumber}`}
                  key={imageNumber}
                />
              );
            })
          }
        </div>
      );
    }
  }

  handleClick() {
    this.props.setScreen(ScreenTypes.selectedChat);
  }

  render() {
    const { dialog } = this.props;
    return (
      <tr onClick={this.handleClick.bind(this)} >
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
  };
}

export default connect(mapStateToProps, {setScreen})(ChatItem);

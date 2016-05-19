import { ScreenTypes } from './../actions/screens';
import ChatUserList from './chat-user-list';
import React, { Component } from 'react';
import DialogList from './dialog-list';
import { connect } from 'react-redux';
import Analyzer from './analyzer';

class App extends Component {

  renderScreen() {
    switch (this.props.screen) {
      case ScreenTypes.dialogsList: {
        return <DialogList />;
      }
      case ScreenTypes.selectedChat: {
        return <ChatUserList />;
      }
      case ScreenTypes.selectedDialog: {
        return <div>Seleted Dialog</div>;
      }
      case ScreenTypes.analyze: {
        return <Analyzer />;
      }
      default: {
        return <DialogList />;
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderScreen()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { screen: state.screen };
}

export default connect(mapStateToProps)(App);

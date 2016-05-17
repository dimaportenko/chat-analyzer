import React, { Component } from 'react';
import DialogList from './dialog-list';
import { connect } from 'react-redux';
import { ScreenTypes } from './../actions/screens';

class App extends Component {

  renderScreen() {
    switch (this.props.screen) {
      case ScreenTypes.dialogsList: {
        return <DialogList />;
      }
      case ScreenTypes.selectedChat: {
        return <div>Seleted Chat</div>
      }
      case ScreenTypes.selectedDialog: {
        return <div>Seleted Dialog</div>
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

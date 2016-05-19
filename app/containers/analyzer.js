/**
 * Created by troublesohard on 5/18/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setScreen, ScreenTypes } from './../actions/screens';
import UserRow from './../components/user-row';

class Analyzer extends Component {

  handleClick() {
    this.props.setScreen(ScreenTypes.selectedChat);
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary btn-sm btn-back"
          onClick={this.handleClick.bind(this)}
        >
          &larr; Back
        </button>
        <p className="screen-label">Анализ</p>
        <table className="table table-hover">
          <tbody className="dialog-table-body">
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    chatId: state.selectedDialog
  };
}

export default connect(mapStateToProps, { setScreen })(Analyzer);

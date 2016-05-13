/**
 * Created by troublesohard on 4/27/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDialogs } from './../actions/dialogs';
import DialogItem from './dialog-item';


class DialogList extends Component {

    componentWillMount() {
        console.log('Dialog list componentWillMount');
        this.props.fetchDialogs();
    }

    renderDialogs() {
      return this.props.dialogs.map(dialog => {
        if(!dialog.chat_id && !dialog.uid) {
          return '';
        }
        return (
          <DialogItem dialog={dialog} key={dialog.chat_id ? dialog.chat_id : dialog.uid} />
        );
      });
    }

    render() {
        return (
            <ul className="list-group">
                { this.renderDialogs() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return { dialogs: state.dialogs}
}

export default connect(mapStateToProps, { fetchDialogs })(DialogList);

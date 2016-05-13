/**
 * Created by troublesohard on 4/27/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDialogs } from './../actions/dialogs';


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
          <li className="list-group-item" key={dialog.chat_id ? dialog.chat_id : dialog.uid}>
            {dialog.chat_id ? dialog.title : dialog.uid}
          </li>
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
  console.log('mapStateToProps(state)');
  console.log(state);
  return { dialogs: state.dialogs}
}

export default connect(mapStateToProps, { fetchDialogs })(DialogList);

import React, { Component } from 'react';
import DialogList from '../containers/dialog_list';
//import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    console.log('App render');
    return (
      <div>
        <DialogList />
      </div>
    );
  }
}

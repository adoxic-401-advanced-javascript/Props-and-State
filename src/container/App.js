import React, { Component } from 'react';
import ColorContainer from './ColorContainer';
import RandomColor from './RandomColor';

export default class App extends Component {
  render() {
    return (
      <>
        <ColorContainer />
        <RandomColor />
      </>
    );
  }
}


import React, { Component } from 'react';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black'
  };

  makeRandomColor = backgroundColor => {
    this.setState({ backgroundColor })
  }

  makeColor() {
    function randColor() {
      return Math.floor(Math.random() * 255);
    }
    return `rgb(${randColor}, ${randColor}, ${randColor})`
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];


    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
      </>
    )
  }
}
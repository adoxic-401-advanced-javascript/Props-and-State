import React, { Component } from 'react';
import ColorDisplay from '../components/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black'
  };

  componentDidMount() {
    this.makeColor();
  }

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  makeColor() {
    function randColor() {
      return Math.floor(Math.random() * 255);
    }
    
    setInterval(() => {
      const newColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
      this.selectColor(newColor);
    }, 1000);
  }

  render() {
    const { backgroundColor } = this.state;
     
    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
      </>
    );
  }
}


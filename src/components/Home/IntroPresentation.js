import React, { Component } from 'react';
import IntroButton from '../Buttons/IntroButton';
import '../../App.css';

const color = {
  color: '#00b1f6'
};

class Presentation extends Component {
  render() {
    return (
      <div className="column color-c flex column center">
        <h2>PrintExpress</h2>
        <h3>20 ans d{"'"}expertise dans l{"'"}impréssion</h3>
        <IntroButton link="/Presentation" name="En savoir plus" color={color}/>
      </div>
    );
  }
}

export default Presentation;

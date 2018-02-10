import React, { Component } from 'react';
import IntroButton from '../Buttons/IntroButton';
import '../../App.css';

const color = {
  color: '#fff100'
};

class Devis extends Component {
  render() {
    return (
      <div className="column color-j flex column center">
        <h2>Demandez un devis</h2>
        <h3>Exigez un devis en moins de 24h00</h3>
        <IntroButton link="/Devis" name="Demandez un devis" color={color}/>
      </div>
    );
  }
}

export default Devis;

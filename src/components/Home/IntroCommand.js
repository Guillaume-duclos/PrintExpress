import React, { Component } from 'react';
import IntroButton from '../Buttons/IntroButton';
import '../../App.css';

const color = {
  color: '#302000'
};

class Command extends Component {
  render() {
    return (
      <div className="column color-n flex column center">
        <h2>Passez commande</h2>
        <h3>Passez votre commande sur notre plateforme sécurisé</h3>
        <IntroButton link="/Commande" name="Commandez" color={color}/>
      </div>
    );
  }
}

export default Command;

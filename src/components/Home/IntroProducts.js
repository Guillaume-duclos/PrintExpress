import React, { Component } from 'react';
import IntroButton from '../Buttons/IntroButton';
import '../../App.css';

const color = {
  color: '#ff0094'
};

class Products extends Component {
  render() {
    return (
      <div className="column color-m flex column center">
        <h2>Nos offres</h2>
        <h3>Découvrez toutes nos offres customisables rien que pour vous !</h3>
        <IntroButton link="/Products" name="Découvrir" color={color}/>
      </div>
    );
  }
}

export default Products;

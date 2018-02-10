import React, { Component } from 'react';
import '../../App.css';

class Affiche extends Component {
  render() {
    return (
      <div className="product-item">
        <div className="product-img"></div>
        <h2>{this.props.title}</h2>
        <p className="product-desc">{this.props.desc}</p>
        <p className="product-dim">{this.props.dim}</p>
        <p className="product-add">Ajouter au panier</p>
      </div>
    );
  }
}

export default Affiche;

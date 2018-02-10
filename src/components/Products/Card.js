import React, { Component } from 'react';
import '../../App.css';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'affiche'
    };
  }

  render() {

    let desc = this.props.desc;
    let reg = new RegExp("<.[^>]*>", "gi" );
    desc = desc.replace(reg, "");

    return (
      <div className={this.props.className}>
        <div className="card-img">
          <img src={this.props.img}/>
        </div>
        <h2>{this.props.title}</h2>
        <p className="card-desc">{desc}</p>
        <p className="card-price">Prix : {this.props.price} € / unité</p>
        <p data-price={this.props.price} data-title={this.props.title} onClick={e => {this.props.onClick(e)}} className="card-add">Ajouter au panier</p>
      </div>
    );
  }
}

export default Products;

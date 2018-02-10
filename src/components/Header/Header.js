import React, { Component } from 'react';
import '../../App.css';
import WaterDrop from '../../img/water_drop.svg';
import Arrow from '../../img/header-arrow.svg';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="top-colors flex row between">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="menu-bar flex row between">
          <h1>
            <Link to="/Home">PrintExpresse</Link>
          </h1>
          <nav>
            <ul className="flex row center">
              <li><Link onMouseEnter={this.activeLink} className={this.props.activeLink[0] === "product" ? "active-link" : "inactive-link"} to="/Products"><div><img src={WaterDrop}/></div>Choisissez votre produit</Link></li>
              <img className={this.props.activeLink[0] === "product" ? "active-link" : "inactive-link"} className="header-arrow" src={Arrow}/>
              <li><Link onMouseEnter={this.activeLink} className={this.props.activeLink[1] === "custom" ? "active-link" : "inactive-link"} to="/CustomProduct"><div><img src={WaterDrop}/></div>Personnalisez votre produit</Link></li>
              <img className={this.props.activeLink[0] === "custom" ? "active-link" : "inactive-link"} className="header-arrow" src={Arrow}/>
              <li><Link onMouseEnter={this.activeLink} className={this.props.activeLink[2] === "devis" ? "active-link" : "inactive-link"} to="/Devis"><div><img src={WaterDrop}/></div>Détail de votre commande</Link></li>
              <img className={this.props.activeLink[0] === "devis" ? "active-link" : "inactive-link"} className="header-arrow" src={Arrow}/>
              <li><Link onMouseEnter={this.activeLink} className={this.props.activeLink[3] === "commande" ? "active-link" : "inactive-link"} to="/Commande"><div><img src={WaterDrop}/></div>Passez commande</Link></li>
            </ul>
          </nav>
          
        </div>
      </div>
    );
  }
}

export default Header;

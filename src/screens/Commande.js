import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NavigationBar from '../components/Navigation/NavigationBar';
import NavigationButtons from '../components/Navigation/NavigationButtons';
import '../App.css';

class Commande extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Passez votre commande"
    }
    this.showText = this.showText.bind(this);
  }

  showText() {
    this.setState({text: "Votre commande a été enregistré"});
  }

  render() {
    return (
      <div className="container">
        <Header activeLink={['product', 'custom', 'devis', 'commande']}/>
        <div className="content flex row center">
          <div className="sub-content flex column center">
            <p className="content-title">{this.state.text}</p>
            <p onClick={this.showText} className="done">Commander</p>
          </div>
        </div>
        <NavigationButtons previousLink="/Devis" previousText="Détail de votre commande"/>
      </div>
    );
  }
}

export default Commande;

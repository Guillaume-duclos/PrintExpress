import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NavigationBar from '../components/Navigation/NavigationBar';
import NavigationButtons from '../components/Navigation/NavigationButtons';
import '../App.css';

class Devis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productsSaved: [],
      productsName: [],
      productsCompPrice: [],
      productsCompName: []
    }
  }

  componentWillMount() {
    console.log(JSON.parse(localStorage.getItem('productsPrice')));
    this.setState({productsSaved: JSON.parse(localStorage.getItem('productsPrice'))});

    console.log(JSON.parse(localStorage.getItem('productsName')));
    this.setState({productsName: JSON.parse(localStorage.getItem('productsName'))});

    console.log(JSON.parse(localStorage.getItem('productsComplementPrice')));
    this.setState({productsCompPrice: JSON.parse(localStorage.getItem('productsComplementPrice'))});

    console.log(JSON.parse(localStorage.getItem('productsComplementName')));
    this.setState({productsCompName: JSON.parse(localStorage.getItem('productsComplementName'))});
  }

  render() {

    const ProductsSaved = Object
      .keys(this.state.productsSaved)
        .map(key => <p className="results-text" key={key}>{this.state.productsSaved[key]} €</p> );

    const ProductsName = Object
      .keys(this.state.productsName)
        .map(keyI => <p className="results-text" key={keyI}>{this.state.productsName[keyI]}</p> );

    const ProductsComplementPrice = Object
      .keys(this.state.productsCompPrice)
        .map(keyY => <p className="results-text" key={keyY}>{this.state.productsCompPrice[keyY]} €</p> );

    const ProductsComplementName = Object
      .keys(this.state.productsCompName)
        .map(keyT => <p className="results-text" key={keyT}>{this.state.productsCompName[keyT]}</p> );

    return (
      <div className="container">
        <Header activeLink={['product', 'custom', 'devis']}/>
        <div className="content flex row center">
          <div className="sub-content flex column center">
            <p className="content-title">Détail de votre commande</p>

            <div className="results flex row between">
              <div>
                {ProductsSaved}
              </div>
              <div>
                {ProductsName}
              </div>
            </div>

            <div className="results flex row between">
              <div>
                {ProductsComplementPrice}
              </div>
              <div>
                {ProductsComplementName}
              </div>
            </div>

          </div>
        </div>
        <NavigationButtons previousLink="/CustomProduct" nextLink="/Commande" previousText="Personnalisez votre produit" nextText="Commandez"/>
      </div>
    );
  }
}

export default Devis;

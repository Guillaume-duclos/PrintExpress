import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../components/Header/Header';
import NavigationBar from '../components/Navigation/NavigationBar';
import Card from '../components/Products/Card';
import NavigationButtons from '../components/Navigation/NavigationButtons';
import '../App.css';

class CustomProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idContent: 'button-1',
      nbProduct: 0,
      products: [],
      productsComplementName: [],
      productsComplementPrice: []
    }
    this.showContent = this.showContent.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    let productsURL = "http://ecommerce.local:8888/wp-json/wp/v2/posts/?per_page=100&_embed";
    fetch(productsURL)
    .then(response => response.json())
      .then(response => {
        this.setState({products: response})
      })
  }

  showContent(e) {
    this.setState({idContent: e.target.getAttribute('data-key')});
  }

  addProduct(e) {
    // let dataComplement = this.state.complementsAdd.push(e.target.getAttribute('data-price'), e.target.getAttribute('data-title'));
    // this.setState=({complementsAdd: dataComplement});
    // localStorage.setItem('productsComplement', this.state.complementsAdd);





    let dataComplementPrice = this.state.productsComplementPrice.push(e.target.getAttribute('data-price'));
    this.setState=({productsComplementPrice: dataComplementPrice});

    let dataComplementName = this.state.productsComplementName.push(e.target.getAttribute('data-title'));
    this.setState=({productsComplementName: dataComplementName});

    //console.log(this.state.productsAdd);
    localStorage.setItem('productsComplementPrice', JSON.stringify(this.state.productsComplementPrice));
    localStorage.setItem('productsComplementName', JSON.stringify(this.state.productsComplementName));

    //console.log(localStorage.getItem('productsName'));
  }

  render() {

    if(this.state.idContent === 'button-1') {
      var products = this.state.products.map((products, index) => {
        if(products.categories[0] === 20) {
          return(
            <Card
              key={index}
              className={["card-type-1 card"]}
              img={products._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url}
              title={products.title.rendered}
              desc={products.content.rendered}
              price={products._embedded['wp:term']['1']['0'].name}
              onClick={this.addProduct}
            />
          );
        }
      });
    }

    if(this.state.idContent === 'button-2') {
      var products = this.state.products.map((products, index) => {
        console.log(products.title.rendered);
        if(products.categories[0] === 19) {
          return(
            <Card
              key={index}
              className={["card-type-2 card"]}
              img={products._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url}
              title={products.title.rendered}
              desc={products.content.rendered}
              price={products._embedded['wp:term']['1']['0'].name}
              onClick={this.addProduct}
            />
          );
        }
      });
    }

    if(this.state.idContent === 'button-3') {
      var products = this.state.products.map((products, index) => {
        if(products.categories[0] === 21) {
          return(
            <Card
              key={index}
              className={["card-type-3 card"]}
              img={products._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url}
              title={products.title.rendered}
              desc={products.content.rendered}
              price={products._embedded['wp:term']['1']['0'].name}
              onClick={this.addProduct}
            />
          );
        }
      });
    }

    if(this.state.idContent === 'button-4') {
      var products = this.state.products.map((products, index) => {
        if(products.categories[0] === 18) {
          return(
            <Card
              key={index}
              className={["card-type-4 card white-text"]}
              img={products._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url}
              title={products.title.rendered}
              desc={products.content.rendered}
              price={products._embedded['wp:term']['1']['0'].name}
              onClick={this.addProduct}
            />
          );
        }
      });
    }

    return (
      <div className="container">
        <Header activeLink={['product', 'custom']} nbProduct={this.state.nbProduct}/>
        <div className="content flex row center">
          <div className="sub-content flex row center">
            {products}
          </div>
          <NavigationButtons previousLink="/products" nextLink="/Devis" previousText="Choisissez votre produit" nextText="Détail de votre commande"/>
          <NavigationBar
            buttonActive={this.state.idContent}
            onClick={this.showContent}
            firstSection="Matière"
            secondSection="Epaisseur"
            thirdSection="Nombre de page"
            fourthSection="Brochure"
          />
        </div>
      </div>
    );
  }
}

export default CustomProduct;

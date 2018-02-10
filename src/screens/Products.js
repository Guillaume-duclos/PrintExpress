import React, { Component } from 'react';
import Header from '../components/Header/Header';
import FlyerIcon from '../img/flyer-icon.svg';
import CardIcon from '../img/card-icon.svg';
import PosterIcon from '../img/poster-icon.svg';
import BookIcon from '../img/book-icon.svg';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navigation/NavigationBar';
import Card from '../components/Products/Card';
import NavigationButtons from '../components/Navigation/NavigationButtons';
import '../App.css';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idContent: 'button-1',
      products: [],
      nbProduct: 0,
      productsPrice: [],
      productsName: []
    }
    this.addProduct = this.addProduct.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  componentDidMount() {
    let productsURL = "http://ecommerce.local:8888/wp-json/wp/v2/posts/?per_page=100&_embed";
    fetch(productsURL)
    .then(response => response.json())
      .then(response => {
        this.setState({products: response})
      })
  }

  showContent = (c) => {
    this.setState({idContent: c.target.getAttribute('data-key')});
  }

  addProduct = (e) => {
    let dataProductPrice = this.state.productsPrice.push(e.target.getAttribute('data-price'));
    this.setState=({productsPrice: dataProductPrice});

    let dataProductName = this.state.productsName.push(e.target.getAttribute('data-title'));
    this.setState=({productsName: dataProductName});

    //this.setState({nbProduct: this.state.nbProduct + 1});
    //console.log(this.state.nbProduct);
    console.log(this.state.productsAdd);
    localStorage.setItem('productsPrice', JSON.stringify(this.state.productsPrice));
    localStorage.setItem('productsName', JSON.stringify(this.state.productsName));

    console.log(localStorage.getItem('productsName'));
  }

  render() {

    if(this.state.idContent === 'button-1') {
      var products = this.state.products.map((products, index) => {
        if(products.categories[0] === 15) {
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
        if(products.categories[0] === 18) {
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
        if(products.categories[0] === 16) {
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
        if(products.categories[0] === 17) {
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
      <div className="container products">
        <Header activeLink={['product']} nbProduct={this.state.nbProduct}/>
        <div className="content flex row between">
          <div className="sub-content flex row center">
            {products}
          </div>
          <NavigationButtons
            previousLink="/Home"
            nextLink="/CustomProduct"
            previousText="Home"
            nextText="Personnalisez votre produit"
            priceProduct={this.state.productsAdd}
          />
          <NavigationBar
            buttonActive={this.state.idContent}
            onClick={this.showContent}
            firstSection="Affiche"
            secondSection="Flyer"
            thirdSection="Livre"
            fourthSection="Carte"
          />
        </div>
      </div>
    );
  }
}

export default Products;

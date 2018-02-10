import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navigation/NavigationBar';
import BlueWaterDrop from '../img/water_drop_blue.svg';
import NavigationButtons from '../components/Navigation/NavigationButtons';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idContent: 'button-1'
    }
    this.showContent = this.showContent.bind(this);
  }

  showContent(e) {
    this.setState({idContent: e.target.getAttribute('data-key')});
  }

  renderContent() {
    if(this.state.idContent === 'button-1') {
      return(
        <div className="bull bull-1 flex column center">
          <p>PrintExpress, l'entreprise d'imprimerie Nantaise existe maintenant depuis 30 ans et est toujours heureuse de vous servire pour l'impression de vos réalisations. PrintExpress rejoint le numérique pour ce digitaliser et vous servire encore plus efficassement via ce site internet où vous pouvez dirrectement commander en ligne.</p>
          <div className="other-bull"></div>
        </div>
      );
    } else if(this.state.idContent === 'button-2') {
      return(
        <div className="bull bull-2 flex column center">
          <p>Nous exersons notre métier depuis 30 ans, ce qui nous a donné une depuis ce jour une forte experience dans le domaine de l'impression. Nous nous éfforsons également chauque jour afin de d'améliorer nos service et nos presations pour toujours être au top.</p>
        </div>
      );
    } else if(this.state.idContent === 'button-3') {
      return(
        <div className="bull bull-3 flex column center">
          <p>PrintExpress à vu le jour il y a 30 ans grace au fondateur Jean Gui qui à su faire évoluer l'imprimerie au fil des temps. Son successeur Michel Legrand repris l'entreprise en 2005 et a garder la même philosophie que son fondateur afin de rester dans la même ligné.</p>
        </div>
      );
    } else if(this.state.idContent === 'button-4') {
      return(
        <div className="bull bull-4 flex column center">
          <p>Nous comptons à ce jour plus de 600 clients qui ont tous étés très ravis de travailler avec nous et qui nous sont fidelle chaque année avec toujours de nouveaux projets. Nous les accompagnons jusqu'au bout de le impressions.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <Header activeLink={['home']}/>
        <div className="content flex row center">
          <div className="sub-content flex row center">
            {this.renderContent()}
          </div>
          <NavigationButtons
            nextLink="/Products"
            nextText="Commencer"
          />
          <NavigationBar
            buttonActive={this.state.idContent}
            onClick={this.showContent}
            firstSection="L'entreprise"
            secondSection="Pourquoi nous choisir ?"
            thirdSection="Notre histoire"
            fourthSection="Nos clients"
          />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PreviousButton from '../Buttons/PreviousButton';
import NextButton from '../Buttons/NextButton';
import '../../App.css';

class NavigationButtons extends Component {

  constructor(props) {
    super(props);
  }

  showButtons() {
    if(this.props.nextLink === undefined && this.props.nextText === undefined) {
      return(
        <div className="navigation-buttons flex row between">
          <PreviousButton link={this.props.previousLink} text={this.props.previousText}/>
        </div>
      );
    } else if(this.props.previousLink === undefined && this.props.previousText === undefined) {
      return(
        <div className="navigation-buttons flex row between home-button">
          <NextButton link={this.props.nextLink} text={this.props.nextText}/>
        </div>
      );
    } else {
      return(
        <div className="navigation-buttons flex row between">
          <PreviousButton link={this.props.previousLink} text={this.props.previousText}/>
          <NextButton priceProduct={this.props.priceProduct} link={this.props.nextLink} text={this.props.nextText}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navigation-buttons-container">
        {this.showButtons()}
      </div>
    );
  }
}

export default NavigationButtons;

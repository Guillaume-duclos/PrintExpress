import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LeftIcon from '../../img/arrow-left.svg';
import '../../App.css';

class PreviousButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="navigation-button previous-button" to={this.props.link}>
        <img src={LeftIcon}/>
        <p>{this.props.text}</p>
      </Link>
    );
  }
}

export default PreviousButton;

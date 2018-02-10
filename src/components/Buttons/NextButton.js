import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import RightIcon from '../../img/arrow-right.svg';
import '../../App.css';

class NextButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="navigation-button next-button" to={this.props.link}>
        <p>{this.props.text}</p>
        <img src={RightIcon}/>
      </Link>
    );
  }
}

export default NextButton;

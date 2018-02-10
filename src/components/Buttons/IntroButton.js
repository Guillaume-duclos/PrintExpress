import React, { Component } from 'react';
import '../../App.css';
import { HashLink as Link } from 'react-router-hash-link';

class IntroButton extends Component {
  render() {
    return (
      <div className="intro-button">
        <Link to={this.props.link} style={this.props.color}>{this.props.name}</Link>
      </div>
    );
  }
}

export default IntroButton;

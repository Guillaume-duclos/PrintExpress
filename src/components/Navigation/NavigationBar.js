import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../App.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation-bar flex row between">
        <div className={this.props.buttonActive === "button-1" ? "button-active" : "button-inactive"}>
          <p data-key="button-1" onClick={c => {this.props.onClick(c)}}>{this.props.firstSection}</p>
        </div>
        <div className={this.props.buttonActive === "button-2" ? "button-active" : "button-inactive"}>
          <p data-key="button-2" onClick={c => {this.props.onClick(c)}}>{this.props.secondSection}</p>
        </div>
        <div className={this.props.buttonActive === "button-3" ? "button-active" : "button-inactive"}>
          <p data-key="button-3" onClick={c => {this.props.onClick(c)}}>{this.props.thirdSection}</p>
        </div>
        <div className={this.props.buttonActive === "button-4" ? "button-active" : "button-inactive"}>
          <p data-key="button-4" onClick={c => {this.props.onClick(c)}}>{this.props.fourthSection}</p>
        </div>
      </div>
    );
  }
}

export default NavigationBar;

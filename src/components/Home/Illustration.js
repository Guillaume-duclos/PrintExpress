import React, { Component } from 'react';
import '../../App.css';
import flyer from '../../img/flyer.jpg';

class Illustration extends Component {

  render() {
    return (
      <div className="illustration flex row around">
        <div className="img-container flex">
          <img src={flyer}/>
        </div>
      </div>
    );
  }
}

export default Illustration;

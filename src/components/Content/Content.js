import React, { Component } from 'react';
import '../../App.css';
import NavigationBar from '../Navigation/NavigationBar';

class Content extends Component {
  render() {
    return (
      <div className="content flex row between">
        
        <NavigationBar/>
      </div>
    );
  }
}

export default Content;

import React, { Component } from 'react';

import './App.css';
import images from './images.json';
import Image from './image.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind (this);
  } 

  handleImageClick(event) {
    alert ("working");
  }

  render() {
    return (
      <div>
        {images.map(img => {
          return (
              <Image src={img.src} click = {this.handleImageClick}/>
          )
        })}
      </div>
    );
  }
}

export default App;

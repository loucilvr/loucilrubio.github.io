import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe/AboutMe';
import Gallery from './Gallery/Gallery';
import './Gallery/Gallery.css';
import './AboutMe/About.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Gallery/>
            <AboutMe/>
        </div>
    );
  }
}

export default App;

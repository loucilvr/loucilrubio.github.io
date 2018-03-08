import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Gallery from './Components/Gallery/Gallery';
import './Components/Gallery/Gallery.css';
import './Components/AboutMe/About.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <AboutMe/>
        </div>
    );
  }
}

export default App;

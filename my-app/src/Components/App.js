import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './AboutMe/AboutMe'
import Code from './Code/Code';
import Design from './Design/Design';
import Illustrations from './Illustrations/Illustrations';
import Misc from './Misc/Misc';
import Menu from './Menu/Menu';


import './App.css';
import './Gallery/Gallery.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="wrapper">
                <Menu/>
                <Route exact path="/" component={AboutMe} />
                <Route path="/code" component={Code} />
                <Route path="/illustrations" component={Illustrations} />
                <Route path="/design" component={Design} />
                <Route path="/misc" component={Misc} />
            </div>
        </Router>
    );
  }
}

export default App;
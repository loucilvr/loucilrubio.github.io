import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe';
import Menu from './Components/Menu/Menu';


import './App.css';
import './Components/Gallery/Gallery.css';
import './Components/AboutMe/About.css';


const Code = ()=> (
    <div className="content">
        <div className="details">
            <h3 className="name">Coding Projects</h3>
        </div>
    </div>
);

const Design = ()=> (
    <div className="content">
        <div className="details">
            <h3 className="name">Design Projects</h3>
        </div>
    </div>
);

const Illustrations = ()=> (
    <div className="content">
        <div className="details">
            <h3 className="name">Illustrations</h3>
        </div>
    </div>
);

const Misc = ()=> (
    <div className="content">
        <div className="details">
            <h3 className="name">Miscellaneous</h3>
        </div>
    </div>
);

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

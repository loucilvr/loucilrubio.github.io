import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from './AboutMe/AboutMe'
import Code from './Code/Code';
import Design from './Design/Design';
import Illustrations from './Illustrations/Illustrations';
import Misc from './Misc/Misc';
import Menu from './Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <div>
                    <Menu/>
                    <main>
                    <Route exact path="/" component={AboutMe} />
                    <Route path="/code" component={Code} />
                    <Route path="/illustrations" component={Illustrations} />
                    <Route path="/design" component={Design} />
                    <Route path="/misc" component={Misc} />
                    </main>
                </div>
            </Switch>
        </Router>
    );
  }
}

export default App;

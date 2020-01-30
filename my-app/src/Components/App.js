import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from './AboutMe/AboutMe'
import Code from './Code/Code';
import Design from './Design/Design';
import Illustrations from './Illustrations/Illustrations';
import Misc from './Misc/Misc';
import Menu from './Menu/Menu';
import './App.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '@media (min-width: 1024px)': {
    mainContent: {
        width: '50%'
    }
  }
});

const App = () => {  
    const classes = useStyles();
    return (
        <Router>
            <Switch>
                <div className={classes.root}>
                    <Menu/>
                    <main className={classes.mainContent}>
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

export default App;

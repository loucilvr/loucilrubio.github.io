import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Code from './components/Code/Code';
import Design from './components/Design/Design';
import Illustrations from './components/Illustrations/Illustrations';
import Misc from './components/Misc/Misc';
import Menu from './components/Menu/Menu';
import './App.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    content: {
        '@media (min-width: 769px)': {
            maxWidth: '1000px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '200px 0px'
        }
    },
    mainContent: {
    '@media (min-width: 769px)': {
            display: 'flex',
            width: '700px'
        }
    }
});

const App = () => {  
    const classes = useStyles();
    return (
        <Router>
            <Switch>
                <div className={classes.content}>
                    <Menu/>
                    <main className={classes.mainContent}>
                        <Route exact path="/" component={Home} />
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

import React from 'react';
import './Code.css'
import mockup1 from '../../assets/img/flippy-iphonex-mockup-1.png'
import mockup2 from '../../assets/img/flippy-iphonex-mockup-2.png'
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    ...commonStyles
});

const Code = () => {
    const classes = useStyles();
    return (
    <div className="details content">
        <h3 className={classes.heading}>Coding Projects</h3>
        <div className="projectDesc">
            <b>Flippy</b>
            <p>A mobile-friendly web app for flipping through a set of study guide flash cards.
                Flippy was built with React and is currently deployed on Heroku. This was an app
                I built to help me study for the US Citizenship exam.
            </p>
            <span className="showcaseApps">
                <img src={mockup2} alt="Flippy iPhone X mockup" width="150px"/>
                <img src={mockup1} alt="Flippy iPhone X mockup" width="150px"/>
            </span>
            <br/>
            <br/>
            <a href="https://flippy-app.herokuapp.com/">
                <button className="launchApp">
               Launch Flippy
                </button>
            </a>
        </div>
    </div>
)};

export default Code;
import React from 'react';
import Menu from "../Menu/Menu";
import './Code.css'
import mockup1 from '../../assets/img/flippy-iphonex-mockup-1.png'
import mockup2 from '../../assets/img/flippy-iphonex-mockup-2.png'

const Code = ()=> (
    <div>
        <Menu/>
        <div className="details content">
            <h3 className="name">Coding Projects</h3>
            <div className="projectDesc">
                <b>Flippy</b>
                <p>A mobile-friendly web application for flipping through a set of study guide flash cards. Flippy was built with React,
                    through Create-React-App project and deployed to Heroku.
                </p>
                <center>
                    <img src={mockup2} alt="Flippy iPhone X mockup" width="150px"/>
                    <img src={mockup1} alt="Flippy iPhone X mockup" width="150px"/>
                </center>
                <br/>
                <br/>
                <center>
                <a href="https://flippy-app.herokuapp.com/">
                    <button className="launchApp">
                   Launch Flippy
                    </button>
                </a>
                </center>
                <br/>
                <p>Other projects will be added below in the coming weeks :)</p>
            </div>
        </div>
    </div>
);

export default Code;
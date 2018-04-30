import React from 'react';
import Menu from "../Menu/Menu";
import './Code.css'

const Code = ()=> (
    <div>
        <Menu/>
        <div className="details content">
            <h3 className="name">Coding Projects</h3>
            <div className="projectDesc">
                <h3>Flippy</h3>
                <p>A simple React application for flipping through flash cards to help
                    study for an exam.<br/>
                    <button className="launchApp">
                        <a href="https://flippy-app.herokuapp.com/">Launch Flippy</a>
                    </button>
                <br/>
                <br/>
                <br/>
                Other projects will be added below in the coming weeks :)</p>
            </div>
        </div>
    </div>
);

export default Code;
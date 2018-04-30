import React from 'react';
import { Link } from 'react-router-dom';
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
                    study for an exame.<br/>
                    <button className="launchApp">
                        <Link to="/flippy">Launch Flippy</Link>
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
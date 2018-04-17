import React from 'react';
import { Link } from 'react-router-dom';

const Code = ()=> (
    <div className="details content">
        <h3 className="name">Coding Projects</h3>
        <div className="projectDesc">
            <h3>Flippy</h3>
            <p>A React application for flipping through flash cards to help
                study for my US Citizenship exam.<br/>
                <Link to="/flippy">Launch Flippy</Link>
            <br/>
            <br/>
            <br/>
            Other projects will be added below in the coming weeks :)</p>
        </div>
    </div>
);

export default Code;
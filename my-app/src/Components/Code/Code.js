import React, { Component } from 'react';
import Flippy1 from './../../assets/img/Flippy-1.png';
import Flippy2 from './../../assets/img/Flippy-2.png';

const Code = ()=> (
    <div className="details">
        <h3 className="name">Coding Projects</h3>
        <div className="projectDesc">
            <h3>Flippy</h3>
            <p>A React application for flipping through flash cards to help study for an exam.<br/>
            (Demo Site to follow)</p>
            <img width="47%" src={Flippy1} alt="Flippy App 1"/> &nbsp;
            <img width="47%" src={Flippy2} alt="Flippy App 1"/><br/>
            <br/>
            <br/>
            <br/>
            <p>Other projects will be added below in the coming weeks :)</p>
        </div>
    </div>
);

export default Code;
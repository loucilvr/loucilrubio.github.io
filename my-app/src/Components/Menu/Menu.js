import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css'

const Menu = () => {
    return (
        <div className="menuContainer">
            <div className="menu">
                <Link to="/" className="menuLink">HOME</Link>
                <Link to="/code" className="menuLink">CODE</Link>
                <Link to="/design" className="menuLink">DESIGN</Link>
                <Link to="/illustrations" className="menuLink">ILLUSTRATIONS</Link>
                <Link to="/misc" className="menuLink">MISC</Link>
            </div>
        </div>
    )
};

export default Menu;

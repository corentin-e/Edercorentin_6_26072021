import logo from './logo.PNG';
import './headerPhotographe.css';
import { Link } from 'react-router-dom';
import React from "react";

const HeaderPhotographe = () => (
    <div className="header-photographe__position-items">
        <Link to="/"><img className="header-photographe__logo-style" src={logo} alt="logo"/></Link>
    </div>
)
export default HeaderPhotographe;
import logo from './logo.PNG';
import './header.css';
import Tag from "./Tag/Tag"
import data from './Tag/data_tags'
import { Link } from 'react-router-dom';
import React from "react";

const Header = () => (
    <div className="header__position-items">
        <Link to="/"><img className="header__logo-style" src={logo} alt="logo"/></Link>

        <div className="header__tags-position-items">
            {data.tags.map(tag => (
                <Tag key={tag.id} content={tag.name}/>
            ))
            }
        </div>
        <div className="header__title-page">Nos Photographes</div>
    </div>
)
export default Header;

import logo from './logo.PNG';
import './headerHome.css';
import Tag from "../Tag/Tag"
import data from '../../HomeComponents/Tag/data_tags'
import { Link } from 'react-router-dom';
import React from "react";

const HeaderHome = ({tagFilter, toggleFilter}) => {

    const isActive = (tag) => { 
        return tagFilter.find( el => el === tag)
    }

    console.log(isActive);
    return (
    <div className="header__position-items">
        <Link to="/"><img className="header__logo-style" src={logo} alt="logo"/></Link>
        <div className="header__tags-display">
            <div className="header__tags-position-items">
                {data.tags.map(tag => (
                    <Tag key={tag.id} content={tag.name} onClick={toggleFilter} isActive={isActive(tag.name)}/>
                ))
                }
            </div>
        </div>
        <div className="header__title-page">Nos Photographes</div>
    </div>
    )
}
export default HeaderHome;

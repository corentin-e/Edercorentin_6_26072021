import 'react-dropdown/style.css';
import "./filterAlbum.css"
import React from 'react';
import Dropdown from "react-dropdown";

const FilterAlbum = ({activeFilter, setActiveFilter}) => {
    const options = [
        {value:'popularité', label:'Popularité', className:"options__style",},
        {value:'date', label:'Date', className:"options__style",},
        {value:'titre', label:'Titre', className:"options__style",}
    ];
    const defaultOption = options.label;

    const changeFilter = (options) => {
        setActiveFilter(options.label);
    };
    

    return (
        <div className="page__items-filter-position">
            <p className="page__filter-text">Trier par</p>
            <div className="page__filter-dropdown-style">
                <Dropdown
                    onChange = {changeFilter}
                    options={options}
                    value={defaultOption}
                    controlClassName='myControlClassName'
                    arrowClassName='myArrowClassName'
                    menuClassName='myMenuClassName'
                    
                />
            </div>
        </div>
    )
    
}
export default FilterAlbum;
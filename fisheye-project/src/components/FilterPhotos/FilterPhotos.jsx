import 'react-dropdown/style.css';
import "./filterPhotos.css"
import React from 'react';
import Dropdown from "react-dropdown";

const FilterPhotos = ({changeActiver}) => {
    const options = [
        {value:'popularité', label:'Popularité', className:"options__style",},
        {value:'date', label:'Date', className:"options__style",},
        {value:'titre', label:'Titre', className:"options__style",}
    ];
    const defaultOption = options.value;
    console.log(defaultOption)

    /* const activerFilter = (label) => {
        changeActiver(options.label);
    }; */

    return (
        <div className="page__items-filter-position">
            <p className="page__filter-text">Trier par</p>
            <div className="page__filter-dropdown-style">
                <Dropdown
                    /* onclick = {() => activerFilter} */
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
export default FilterPhotos;
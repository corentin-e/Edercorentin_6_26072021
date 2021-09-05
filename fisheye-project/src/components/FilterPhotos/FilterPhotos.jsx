import 'react-dropdown/style.css';
import "./filterPhotos.css"
import React, {options} from 'react';
import Dropdown from "react-dropdown";

const FilterPhotos = ({activeFilter, setActiveFilter}) => {
    const options = [
        {value:'popularité', label:'Popularité', className:"options__style"},
        {value:'date', label:'Date', className:"options__style"},
        {value:'titre', label:'Titre', className:"options__style"}
    ];
    const defaultOption = options[0];
    console.log(defaultOption)
    return (
        <div className="page__items-filter-position">
            <p className="page__filter-text">Trier par</p>
            <div className="page__filter-dropdown-style">
                <Dropdown
                    /* onClick={() => setActiveFilter(options[0])} */
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
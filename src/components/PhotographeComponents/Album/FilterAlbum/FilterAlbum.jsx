import 'react-dropdown/style.css';
import "./filterAlbum.css"
import React from 'react';
import Dropdown from "react-dropdown";
import Select from "react-select";

const FilterAlbum = ({setActiveFilter}) => {

    const options = [
        {value:'popularité', label:'Popularité', className:"options__style",},
        {value:'date', label:'Date', className:"options__style",},
        {value:'titre', label:'Titre', className:"options__style",}
    ];
    const defaultOption = options.label;

    const changeFilter = (options) => {
        setActiveFilter(options.label);
    };

    const customStyles = {
        control: (styles) => ({...styles, backgroundColor: 'brown', width: 200, textColor: 'white' }),
        option: (styles, state) => ({...styles, color: state.isFocused ? "black" : "white" }),
        singleValue: (styles) => ({...styles, color: 'white'}),
        placeholder: (styles) => ({...styles, color: 'white'}),
        indicatorContainer: (styles) => ({...styles, color: 'white'}),
        menu: (styles) => ({...styles, color: 'white', backgroundColor:'brown'}),
    }
    

    return (
        <div className="page__items-filter-position">
            <label className="page__filter-text">Trier par</label>
            <Select
                onChange = {changeFilter}
                options={options}
                value={defaultOption}
                styles={customStyles}
            />
        </div>
    )
    
}
export default FilterAlbum;
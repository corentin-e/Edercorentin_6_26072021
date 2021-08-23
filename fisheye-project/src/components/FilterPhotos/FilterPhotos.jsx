import "./filterPhotos.css"
import Dropdown from 'react-dropdown';

const FilterPhotos = () => {
    const options = [
        '', 'Date', 'Titre'
    ];
    const defaultOption = options[0];

    return (
        <div className="page__items-filter-position">
            <p className="page__filter-text">Trier par</p>
            <div className="page__filter-dropdown-style">
                <Dropdown options={options} value={defaultOption} placeholder="Popularité"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down page__icon-position"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </div>
    )
}
export default FilterPhotos;
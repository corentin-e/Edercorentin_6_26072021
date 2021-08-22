import "./filterPhotos.css"

const FilterPhotos = () => (
    <div className="page__items-filter-position">
        <p className="page__filter-text">Trier par</p>
        <select className="page__filter-style">
            <option value="Popularité">Popularité</option>
            <option value="Date">Date</option>
            <option value="Titre">Titre</option>
        </select>
    </div>    
    
)
export default FilterPhotos;
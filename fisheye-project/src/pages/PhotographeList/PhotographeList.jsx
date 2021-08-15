import data from '../../data'
import './photographeList.css'

const PhotographeList = () => (
    <div className="page__grid-style">
        {data.photographers.map(photographer => (
            <div className="page__grid-position">
                <div className="page__columns">
                    <div className="page__colonums-style">
                        <img className="page__portrait-style" src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" />
                        <div className="page__name-style">{photographer.name}</div>
                        <div className="page__city-style">{photographer.city}</div>
                        <div className="page__citation-style">{photographer.tagline}</div>
                        <div className="page__price-style">{photographer.price}€/jour</div>
                        <div className="page__tags-style">

                        </div>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
)
export default PhotographeList;
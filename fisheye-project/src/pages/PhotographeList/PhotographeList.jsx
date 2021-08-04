import data from '../../data'
import './photographeList.css'

const PhotographeList = () => (
    <div className="page__position-columns">
        {data.photographers.map(photographer => (
            <div className="page__columns">
                <div className="page__colonums-style">
                    <img src= {photographer.portrait} alt="portrait-photographe" />
                </div>
            </div>
        ))
        }
    </div>
)
export default PhotographeList;
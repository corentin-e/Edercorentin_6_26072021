import "./infosBand.css"
import data from '../../data'
import {useParams} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';


const InfosBand = () => {
    let { id } = useParams();
    return (
        <div>
            {data.photographers.filter(user => user.id == id).map(photographer => (
                <div className="page__infos-band-items-position">
                    <div className="page__infos-band-like-style">{photographer.likes}<FeatherIcon className="page__info-band-icon-style" icon="heart" fill="black" width="15px" /></div>
                    <div className="page__infos-band-price-style">{photographer.price}€/jour </div>      
                </div>
                ))
            }
        </div>
    )
}
export default InfosBand;
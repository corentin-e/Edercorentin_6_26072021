import "./likesPricesBand.css"
import FeatherIcon from 'feather-icons-react';


const LikesPricesBand = ({likes, price}) => (
    <div className="page__infos-band-items-position">
        <div className="page__infos-band-like-style">{likes}<FeatherIcon className="page__info-band-icon-style" icon="heart" fill="black" width="15px" /></div>
        <div className="page__infos-band-price-style">{price}€/jour </div>      
    </div>        
)
export default LikesPricesBand;
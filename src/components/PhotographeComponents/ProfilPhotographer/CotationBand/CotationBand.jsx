import "./cotationBand.css"
import FeatherIcon from 'feather-icons-react';


const CotationBand = ({likes, price}) => (
    <div className="page__infos-band-items-position">
        <span className="page__infos-band-like-style">{likes}<FeatherIcon  className="page__info-band-icon-style" icon="heart" fill="black" width="15px" /></span>
        <span className="page__infos-band-price-style">{price}€/jour </span>      
    </div>        
)
export default CotationBand;
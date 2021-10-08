import "./bandCard.css"
import { ButtonContact } from "../../ContactTools/ButtonContact";
import Tag from "../../../HomeComponents/Tag"



const BandCard = ({photographer}) => (
    <div> 
        <div className="page__background">
            <div className="page__items-position">
                <div className="page__details-block-position">
                    <div className="page__details-block-style">
                        <div className="page__photographer-block">
                            <div className="page__details-name-style">{photographer.name}</div>
                            <ButtonContact  photographer={photographer}/>
                        </div>
                       
                        <div className="page__details-location-style">{photographer.city}, {photographer.country}</div>
                        <div className="page__details-citation-style">{photographer.tagline}</div>
                        <div className="page__details-tags-style">
                            {photographer.tags.map(tag => (
                                <Tag key={tag} content={tag} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="page__details-portrait-style"><img className="page__portrait-dimensions"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt={photographer.alt} /></div>
            </div>
        </div>
    </div>
)
export default BandCard;

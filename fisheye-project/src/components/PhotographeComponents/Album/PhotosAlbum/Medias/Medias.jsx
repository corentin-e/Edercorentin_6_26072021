/* import { Router, Link, Route } from "react-router-dom"; */
import "./medias.css"
import FeatherIcon from 'feather-icons-react';
import React, {useState} from 'react';



const Medias = ({media, incrementGlobalLike, openModal}) => {
    const  [likes, setLike] = useState(media.likes)
    const incrementLike = () => {
        setLike(likes + 1)
        incrementGlobalLike()
    }

    return (
        <div className="page__album-grid-position" >
            <div className="page__album-grid">
                <div className="page__album-block-image-items-position">
                    <div className="page__image-cadre-album-style" onClick={openModal}>
                        {("video" in media)
                            ? <video autoPlay controls className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
                            : <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
                        }
                    </div>
                    <div className="page__image-details-album-position">
                        <div className="page__image-details-title-style" onClick={openModal}>{media.title}</div>
                        <div className="page__image-details-likes-style" onClick={incrementLike} >{likes}<FeatherIcon key="icon" className="page__details-likes-icon-style" icon="heart" fill="brown" width="15px" /></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Medias;
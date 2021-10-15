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
        <div key ={media.title} className="page__album-grid-position" >
            <div className="page__album-grid">
                <div className="page__album-block-media-items-position">
                    <div className="page__media-cadre-album-style" onClick={openModal}>
                        {("video" in media)
                            ?   <video className="page__video-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
                            :   <img className="page__media-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
                        }
                        {("video" in media)
                            ?    <div className="page__position-play-icon-style">
                                    <FeatherIcon key="icon" className="page__details-play-icon-style" icon="play" fill="white" width="30px" />
                                </div>
                            :   <div className="page__position-play-icon-style"></div>
                        }
                    </div>
                    <div className="page__media-details-album-position">
                        <div className="page__media-details-title-style" onClick={openModal}>{media.title}</div>
                        <button className="page__media-details-likes-style" onClick={incrementLike} >{likes}<FeatherIcon key="icon" className="page__details-likes-icon-style" icon="heart" fill="brown" width="15px" /></button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Medias;
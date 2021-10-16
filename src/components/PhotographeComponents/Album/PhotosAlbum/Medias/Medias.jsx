/* import { Router, Link, Route } from "react-router-dom"; */
import "./medias.css"
import FeatherIcon from 'feather-icons-react';
import React, {useState} from 'react';
import SourceOfMedias from "../../SourceOfMedias/SourceOfMedias";



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
                        <SourceOfMedias media={media}/>
                        {("video" in media)
                            ?    <div className="page__position-play-icon-style">
                                    <FeatherIcon key="icon" className="page__details-play-icon-style" icon="play" fill="white" width="30px" />
                                </div>
                            :   <div className="page__position-play-icon-style"></div>
                        }
                    </div>
                    <div className="page__media-details-album-position">
                        <button className="page__media-details-title-style" onClick={openModal}>{media.title}</button>
                        <button className="page__media-details-likes-style" onClick={incrementLike} >{likes}<FeatherIcon key="icon" className="page__details-likes-icon-style" icon="heart" fill="brown" width="15px" /></button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Medias;
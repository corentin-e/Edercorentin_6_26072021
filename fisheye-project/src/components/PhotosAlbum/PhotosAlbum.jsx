/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import {useParams} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';


const PhotosAlbum = ({photos}) => {
    let { id } = useParams();
    return (
        <div className="page__album-grid-style">
            {photos.map(media => (
                    <div className="page__album-grid-position" >
                        <div className="page__album-grid">
                            <div className="page__album-block-image-items-position">
                                <div className="page__image-cadre-album-style">
                                    <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                                </div>
                                <div className="page__image-details-album-position">
                                    <div className="page__image-details-title-style">{media.title}</div>
                                    <div className="page__image-details-likes-style">{media.likes}<FeatherIcon className="page__details-likes-icon-style" icon="heart" fill="brown" width="15px" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PhotosAlbum;
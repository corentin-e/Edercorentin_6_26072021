/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import data from '../../data'
import {useParams} from "react-router-dom";


const PhotosAlbum = () => {
    let { id } = useParams();
    return (
        <div className="page__album-grid-style">
            {data.media.filter(photo => photo.photographerId == id).map(media => (
                    <div className="page__album-grid-position" >
                        <div className="page__album-grid">
                            <img className="page__image-album-style" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                            {/*  <img className="page__image-album-style"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" /> */}
                            {/* <div className="page__photo-album-style"><img  src= {photographer.image} alt="portrait-photographe" /></div>
                            <Link to="/viewAlbum"></Link>
                            <Router>
                                <div>
                                <Route path="/viewAlbum">
                                    <ViewAlbum />
                                </Route>
                                </div>
                            </Router> */}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PhotosAlbum;
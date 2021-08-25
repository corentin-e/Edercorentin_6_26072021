/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import data from '../../data'
import {useParams} from "react-router-dom";


const PhotosAlbum = () => {
    let { id } = useParams();
    return (
        <div>
            {data.photographers.filter(user => user.id == id).map(photographer => (
                    <div className="page__album-position">
                        {/* <img className="page__image-album-style" src={`${process.env.PUBLIC_URL}/asset/photos/Photographer/${photographer.portrait}`} /> */}
                        <img className="page__image-album-style"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" />
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
                ))
            }
        </div>
    )
    
}
export default PhotosAlbum;
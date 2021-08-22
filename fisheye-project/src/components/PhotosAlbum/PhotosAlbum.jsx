import { Router, Link, Route } from "react-router-dom";
import "./photosAlbum.css"
import data from '../../data'
import {useParams} from "react-router-dom";
import {useState} from "react";


const PhotosAlbum = () => {
    let { id } = useParams();
    const [activeFilter, setActiveFilter] = useState('image')
    const photos = data.media.filter(photo => photo.image == id)
    const photosSorted = photos.sort((a, b) => {
        if(activeFilter === 'image') {
            return b.likes - a.likes
        }
    })
    return (
        <div>
            {data.photographers.filter(user => user.id == id).map(photographer => (
                    <div className="page__album-position">
                        {photosSorted.map((photo) => (
                            <img className="page__image-album-style" src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photo.image}`} />
                            ))
                        } 
                        {/* <div className="page__photo-album-style"><img  src= {photographer.image} alt="portrait-photographe" /></div> */}
                        {/* <Link to="/viewAlbum"></Link>
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
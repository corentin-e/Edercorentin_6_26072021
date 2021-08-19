import { BrowserRouter as Router } from "react-router-dom";
import "./photosAlbum.css"

const PhotosAlbum = () => (
    <div className="page__album-grid-style">
        {data.photographers.map(photographer => (
            <div className="page__album-grid-position">
                <div className="page__album-grid-position">
                    <div className="page__album-columns">
                        <div className="page__album-columns-style">
                            <Link to="/viewAlbum"><div className="page__photo-album-style"><img  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" /></div></Link>
                            <Router>
                                <div>
                                <Route path="/viewAlbum">
                                    <ViewAlbum />
                                </Route>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
    
)
export default PhotosAlbum;
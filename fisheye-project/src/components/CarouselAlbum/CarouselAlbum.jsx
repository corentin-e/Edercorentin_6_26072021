import "./index.js"
import "./carouselAlbum.css"
import React, {useState} from 'react';
import Carousel from 'react-carousel';



const CarouselAlbum = ({photosSorted, closeModal}) => {

    const [setPhotoView] = useState({value: 0})
    
    const changePhotoView = (value) => {
        setPhotoView({ value });
    }

    return (
        <div className="carousel__text-test">
            <input
                type="number"
                value={setPhotoView}
                onChange={(event) => changePhotoView(parseInt(event.target.value || 0))}
            />
            <Carousel
                value={setPhotoView}
                onChange={changePhotoView}
                slides={photosSorted.map(media => (
                    <div>
                        <div className="carousel__image-cadre-album-style">
                            {("video" in media)
                                ? <video   autoplay controls className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} />
                                : <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                            }
                        </div>
                        <div className="page__image-details-title-style">{media.title}</div>
                    </div>
                ))
                }
                plugins={[
                    'arrows',
                    'clickToChange'
                ]}
            />
        </div>
    );
    
    
}
export default CarouselAlbum;
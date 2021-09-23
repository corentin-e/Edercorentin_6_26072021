import "./index.js"
import "./carouselAlbum.css"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselAlbum = ({photos}) => {

    /* const data = [
        {
            id: 1,
            image: '../../asset/slide/star-citizen.jpg',
            titre: 'SC 1',
        },
        {
            id: 2,
            image: '2016-star-citizen-game-img.jpg',
            titre: 'SC 2',
        },
    ] */
    console.log(photos);

    return (     
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
            {photos.map(media => (
                <div>
                    <div key={media.id} className="page__image-cadre-carousel-style">
                        {("video" in media)
                            ? <video autoPlay controls className="page__image-carousel-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} />
                            : <img className="page__image-carousel-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                        }
                        
                    </div>
                    <div className="page__image-carousel-details-title-style">{media.title}</div>
                </div>
            ))
            }
            
        </Carousel>
        
            
       
       
    );
    
    
}
export default CarouselAlbum;
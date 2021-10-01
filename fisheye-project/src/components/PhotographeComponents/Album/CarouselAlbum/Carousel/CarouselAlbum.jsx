import "./index.js"
import "./carouselAlbum.css"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselAlbum = ({photos}) => {

    return (     
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
            {photos.map(media => (
                <div>
                    <div key={media.id} className="page__image-cadre-carousel-style">
                        {("video" in media)
                            ? <video autoPlay controls className="page__image-carousel-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
                            : <img className="page__image-carousel-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
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
import "./index.js"
import "./carouselAlbum.css"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
/* import SourceOfMedias from "../SourceOfMedias/SourceOfMedias.jsx"; */


const CarouselAlbum = ({photos, carrouselIndex, isModalOpen}) => {

    return (
        <Carousel class="carousel_style" ariaLabel selectedItem={carrouselIndex} autoFocus={false} showThumbs={false} showStatus={false} showIndicators={false}>
            {photos.map(media => (
                <div key={media.id}>
                    <div key={media.id} className="page__image-cadre-carousel-style">
                        <SourceOfMedias isModalOpen={isModalOpen} media={media}/>
                    </div>
                    <div className="page__image-carousel-details-title-style">{media.title}</div>
                </div>
            ))
            }
        </Carousel>
    );


}
export default CarouselAlbum;
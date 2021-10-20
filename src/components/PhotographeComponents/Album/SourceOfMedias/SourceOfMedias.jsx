import "./sourceOfMedias.css"
import React from "react";



const SourceOfMedias = ({media, isModalOpen}) => {

    /* If Carousel Modal is open so video media is active else video media is a image  */

    if (isModalOpen) {
        return (
            <div className="page__under-cadre-style">
                {("video" in media)
                    ? <video controls className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
                    : <img className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
                }
            </div>
        )
    } else {
        return (
            <div className="page__under-cadre-style">
                {("video" in media)
                    ? <video className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
                    : <img className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
                }
            </div>
        )
    }
}
export default SourceOfMedias;
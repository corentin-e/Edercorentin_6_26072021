import "./sourceOfMedias.css"
import React from "react";
import { CreatedVideoFactory } from "./CreatedVideoFactory";

const SourceOfMedias = ({media, isModalOpen}) => {

    /* If Carousel Modal is open so video media is active else video media is a image  */
    
    return (
        <div className="page__under-cadre-style">
            {("video" in media)
                ? <CreatedVideoFactory media={media} isModalOpen={isModalOpen} />
                : <img className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} alt={media.alt} />
            }
        </div>
    )
}
export default SourceOfMedias;
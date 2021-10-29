import "./createdVideoFactory.css"
import React from "react";

const CreatedVideoFactory = ({media, isModalOpen}) => {
    if (isModalOpen) {
        return (
            <video autoPlay className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
        )
    } else {
        return (
            <video className="page__media-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} alt={media.alt} />
        )
    }
}
export default CreatedVideoFactory;
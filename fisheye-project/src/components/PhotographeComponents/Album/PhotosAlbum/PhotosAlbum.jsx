/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import Modal from 'react-modal';
import React from 'react';
import { CarouselAlbum } from "../CarouselAlbum/Carousel";
import Medias from "./Medias/Medias";


const PhotosAlbum = ({photosSorted, photos, incrementGlobalLike}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="page__album-grid-style">
            {photosSorted.map(media => (
                <Medias media={media} incrementGlobalLike={incrementGlobalLike} openModal={openModal} />
            ))
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact me"
                className="modal_responsive-carousel"
            >
                <span className="close_modal-carousel" onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="brown" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                <CarouselAlbum photos={photos} closeModal={closeModal}/>
            </Modal>
        </div>
    )

}
export default PhotosAlbum;
/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import Modal from 'react-modal';
import React, {useState} from 'react';
import { CarouselAlbum } from "../CarouselAlbum";
import Medias from "./Medias/Medias";
import { span } from "prelude-ls";

Modal.setAppElement('#root');

const PhotosAlbum = ({photosSorted, photos, incrementGlobalLike}) => {

    /* Constante use to have statut of modal opening */
    const [modalIsOpen, setIsOpen] = React.useState(false);

    /* Get the statut of carousel */
    const [carrouselIndex, setCarrouselIndex] = useState(0)

    /* States of Modal oppening with Carousel */
    const openModal = (i) => () => {
        setCarrouselIndex(i)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    /* Function for open Modal with Carousel */
    function isModalOpen() {
        let isActiveModal = false;
        if (setCarrouselIndex(i) && setIsOpen == true) {
            isActiveModal = true;
        }
    }

    return (
        <div className="page__album-grid-style">
            {photosSorted.map((media, i) => (
                <Medias key={media.title} media={media} incrementGlobalLike={incrementGlobalLike} openModal={openModal(i)} />
            ))
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact me"
                className="modal_responsive-carousel"
            >
                <span className="close_modal-carousel" onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="brown" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                <CarouselAlbum isModalOpen={isModalOpen} carrouselIndex={carrouselIndex} photos={photos} closeModal={closeModal}/>
            </Modal>
        </div>
    )

}
export default PhotosAlbum;
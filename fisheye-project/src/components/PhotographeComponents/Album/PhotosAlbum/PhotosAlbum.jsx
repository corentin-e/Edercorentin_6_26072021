/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import {useParams} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import Modal from 'react-modal';
import React, {useState} from 'react';
import { CarouselAlbum } from "../CarouselAlbum/Carousel";



const PhotosAlbum = ({photosSorted, photos}) => {

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
                    <div className="page__album-grid-position" >
                        <div className="page__album-grid">
                            <div className="page__album-block-image-items-position">
                                <div className="page__image-cadre-album-style" onClick={openModal}>
                                    {("video" in media)
                                        ? <video autoPlay controls className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} />
                                        : <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                                    }
                                </div>
                                <div className="page__image-details-album-position">
                                    <div className="page__image-details-title-style" onClick={openModal}>{media.title}</div>
                                    <div className="page__image-details-likes-style">{media.likes}<FeatherIcon className="page__details-likes-icon-style" icon="heart" fill="brown" width="15px" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
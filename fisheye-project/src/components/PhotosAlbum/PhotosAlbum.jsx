/* import { Router, Link, Route } from "react-router-dom"; */
import "./photosAlbum.css"
import {useParams} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import Modal from 'react-modal';
import React from 'react';
import { CarouselAlbum } from "../CarouselAlbum";


const PhotosAlbum = ({photosSorted}) => {

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
                            <div className="page__album-block-image-items-position" onClick={openModal}>
                                <div className="page__image-cadre-album-style">
                                    {("video" in media)
                                        ? <video   autoplay controls className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} />
                                        : <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                                    }
                                </div>
                                <div className="page__image-details-album-position">
                                    <div className="page__image-details-title-style">{media.title}</div>
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
                className="modal_responsive"
            >
                <CarouselAlbum photosSorted={photosSorted} closeModal={closeModal}/>
          </Modal>
        </div>
    )
}
export default PhotosAlbum;
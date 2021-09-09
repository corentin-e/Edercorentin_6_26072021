import "./index.js"
import "./buttonContact.css"
import FormContact from "../FormPhotographerContact/FormContact.jsx"
import Modal from 'react-modal';
import React from 'react';
import { useMediaQuery } from 'react-responsive'

const ButtonContact = ({photographer, photosSorted}) => {
    /* const isMobilScreen = useMediaQuery ({query: '(max-width: 700px)'})
    const isTabletScreen = useMediaQuery ({query: '(max-width: 1200px)'}) */
    const [modalIsOpen, setIsOpen] = React.useState(false);
    /* const isDestopScreen = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        width: '35%',
      },
    }; */
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div className="page__button-responsive">
          <button className="page__button-contact-style" onClick={openModal}>Contactez-moi</button>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Contact me"
          className="modal_responsive"
          >
            <FormContact photographer={photographer} closeModal={closeModal}/>
          </Modal>
        </div>
    )
    
}
export default ButtonContact;
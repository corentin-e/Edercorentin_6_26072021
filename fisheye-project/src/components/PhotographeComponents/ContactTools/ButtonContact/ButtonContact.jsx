import "./index.js"
import "./buttonContact.css"
import FormContact from "../FormPhotographerContact/FormContact.jsx"
import Modal from 'react-modal';
import React from 'react';

const ButtonContact = ({photographer, photosSorted}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div className="page__button-postion">
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
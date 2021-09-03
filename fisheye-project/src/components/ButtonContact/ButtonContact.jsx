import "./index.js"
import "./buttonContact.css"
import FormContact from "../FormPhotographerContact/FormContact.jsx"
import Modal from 'react-modal';
import React from 'react';

const ButtonContact = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div>
            <button className="page__button-contact-style" onClick={openModal}>Contactez-moi</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <FormContact/>
            </Modal>
        </div>
    )
    
}
export default ButtonContact;
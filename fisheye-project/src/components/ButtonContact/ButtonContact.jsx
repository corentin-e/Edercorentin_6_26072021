import "./index.js"
import "./buttonContact.css"
import FormContact from "../FormPhotographerContact/FormContact.jsx"
import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#yourAppElement');

const ButtonContact = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div>
            <button className="page__button-contact-style" onClick={openModal}>Contactez-moi</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <FormContact/>
            </Modal>
        </div>
    )
    
}
export default ButtonContact;
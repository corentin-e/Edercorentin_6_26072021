import "./index.js"
import "./buttonContact.css"
import FormContact from "../FormPhotographerContact/FormContact.jsx"
import Modal from 'react-modal';
import React from 'react';

const ButtonContact = ({photographer}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '380px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
      },
    };
  
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
            contentLabel="Contact me"
            style={customStyles}
            >
              <FormContact photographer={photographer} closeModal={closeModal}/>
            </Modal>
        </div>
    )
    
}
export default ButtonContact;
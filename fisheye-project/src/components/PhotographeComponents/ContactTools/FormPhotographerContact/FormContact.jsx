import "./formContact.css"
import React from "react";

const FormContact = ({photographer, closeModal}) => {

/*     let first_name = {first_name};
    let last_name = {last_name};
    let email = {email};
    let message = {message}; */

  /*   const formCompleted = ([first_name, last_name, email, message]) => {
        console.log("Prénom:" + first_name);
        console.log("Nom:" + last_name);
        console.log("Email:" + email);
        console.log("Votre message:" + message);
        return false;
    } */

    const [valueFirstName, setFirstName] = React.useState('');
    const [valueLastName, setLastName] = React.useState('');
    const [valueEmail, setEmail] = React.useState('');
    const [valueMessage, setMessage] = React.useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleForm = () => {
        console.log("Prénom: " + valueFirstName);
        console.log("Nom: " + valueLastName);
        console.log("Email: " + valueEmail);
        console.log("Votre message: " + valueMessage);
    }

    return (
        <div className="form__content-style">
            <div className="form__header-position-items">
                <div className="form__header-title">
                    <p className="form__details-text-title-style">Contactez {photographer.name}</p>
                    <span className="close" onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                </div>
                <div className="form__content-position-items">
                    <form>
                        <p className="form__content-text-style">Prénom</p>
                        <input
                            name="first_name"
                            className="form__content-input-style" 
                            type="text"
                            value={valueFirstName}
                            onChange={handleFirstName} 
                        />
                        <p className="form__content-text-style">Nom</p>
                        <input
                            name="last_name" 
                            className="form__content-input-style" 
                            type="text" 
                            value={valueLastName}
                            onChange={handleLastName} 
                        />
                        <p className="form__content-text-style">Email</p>
                        <input
                            name="email"  
                            className="form__content-input-style" 
                            type="email"
                            value={valueEmail}
                            onChange={handleEmail} 
                        />
                        <p className="form__content-text-style">Votre message</p>
                        <textarea
                            name="message"  
                            className="form__content-input-message-style" 
                            type="textarea"
                            value={valueMessage}
                            onChange={handleMessage} 
                        />
                        <input
                            className="form__btn-submit"
                            type="button"
                            value= "Envoyer"
                            onClick={handleForm}   
                        />
                    </form>
                </div>
            </div>
        </div>
   ) 
   
} 
export default FormContact;
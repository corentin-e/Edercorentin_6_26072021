import "./formContact.css"
import React from "react";

const FormContact = ({photographer, closeModal}) => {
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
                            className="form__content-input-style" 
                            type="text"
                            minlength="2"
                            required  
                        />
                        <p className="form__content-text-style">Nom</p>
                        <input 
                            className="form__content-input-style" 
                            type="text"  
                        />
                        <p className="form__content-text-style">Email</p>
                        <input 
                            className="form__content-input-style" 
                            type="email"
                        />
                        <p className="form__content-text-style">Votre message</p>
                        <textarea
                            className="form__content-input-message-style" 
                            type="textarea"
                        />
                        <input
                            id="submit"
                            className="form__btn-submit"
                            type="submit"
                            value="Envoyer"
                            onClick={closeModal}
                        />
                    </form>
                </div>
            </div>
        </div>
   )  
}
export default FormContact;
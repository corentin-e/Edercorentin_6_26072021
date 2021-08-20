export { default as ButtonContact } from './ButtonContact'

//DOM Elements
const contactBtn = document.querySelector(".page__button-contact-style");

// launch modal event
contactBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
contactBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
  
    document.querySelectorAll('input[name="location"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        document.getElementById("alertcity").innerHTML = "";
      });
    });
    
}

// Close modal form
function closeModal() {
    if (modalbg.style.display == "block") {
      modalbg.style.display = "none";
    }
  }
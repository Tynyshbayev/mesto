let formElement = document.querySelector(".popup__form");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__text");
let closeButton = document.querySelector(".popup__close-button");
let popupProfile = document.querySelector(".popup");
let openButtonPopup = document.querySelector(".profile__edit-button");  
let nameInput = document.querySelector(".popup__form-name");
let jobInput = document.querySelector(".popup__form-text");


function closePopup() { 
  popupProfile.classList.remove("popup_opened"); 
} 

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;  
  closePopup();

}

function openPopup() {
  popupProfile.classList.add("popup_opened");
 nameInput.value = nameProfile.textContent;  
 jobInput.value = jobProfile.textContent;
}

openButtonPopup.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
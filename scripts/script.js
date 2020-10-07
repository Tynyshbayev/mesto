let formElement = document.querySelector(".popup__form");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__text");
let closeButton = document.querySelector(".popup__close-button");
let popupProfile = document.querySelector(".popup");
let openButtonPopup = document.querySelector(".profile__edit-button");  
let nameInput = document.querySelector(".popup__form-name");
let jobInput = document.querySelector(".popup__form-text");



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;  
  closePopup(popup);

}

function closePopup(popup) { 
  popupProfile.classList.remove("popup_opened"); 
} 

function openPopup(popup) {
  popupProfile.classList.add("popup_opened");
 nameInput.value = nameProfile.textContent;  
 jobInput.value = jobProfile.textContent;
}

function openProfilePopup() {
  openPopup(popupProfile);
}
openButtonPopup.addEventListener("click", openProfilePopup);

closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
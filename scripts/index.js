import {Card} from './card.js';
import {FormValidator} from './formValidator.js'

const formProfileElement = document.querySelector(".popup__form");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__text");
const closeProfileButton = document.querySelector(".popup__close-button");
const popupProfileMain = document.querySelector(".popup");
const openButtonPopup = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_text");

const addButton = document.querySelector(".profile__add-button");
const popUpAdd = document.querySelector("#popup_elements");
const popUpPic = document.querySelector("#popup-image");
const popUpPicCloseButton = document.querySelector(
  ".popup__close-button-image"
);
const allPopups = Array.from(document.querySelectorAll(".popup"));
const sectionElement = document.querySelector(".elements");
const template = document.querySelector(".template");
const elementName = document.querySelector(".popup__input_type_title");
const elementPlace = document.querySelector(".popup__input_type_url");
const popUpSaveButton = document.querySelector("#elements__save-button");
const popUpCloseButtonAdd = document.querySelector("#elements__close");
const popUpPicImage = document.querySelector(".popup__picture-image");
const popUpPicText = document.querySelector(".popup__title-image");

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];



function submitProfileForm(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleClosePopup(popupProfileMain);
}

function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
   handleOpenPopup(popupProfileMain);
  }


function handleOpenPopup(popUpAdd) {
  popUpAdd.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
  popUpSaveButton.classList.add(parameterofValidation.inactiveButtonClass);
  popUpSaveButton.disabled = true;
}



function handleClosePopup(popUpAdd) {
  popUpAdd.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}



const keyHandler = (evt) => {
  if(evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      handleClosePopup(openedPopup);
  }
}

allPopups.forEach(function (popUpAdd) {
  popUpAdd.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      handleClosePopup(popUpAdd);
    }
  });
}); 

function picOpenPls (link, name) {
  popUpPicImage.src = link;
  popUpPicText.innerText =name;
  handleOpenPopup(popUpPic);
}

const getCard = (data) => {
  const card = new Card(data, '.template', picOpenPls);
  return card.getCard();
}


const renderCards = () => {
  const items = initialCards.map(element => getCard(element));
  sectionElement.append(...items)
}

function handlesubmitform(evt) {
  evt.preventDefault();
  const item = getCard({
    name: elementName.value,
    link: elementPlace.value,
  });
  sectionElement.prepend(item);
  handleClosePopup(popUpAdd);
};

const parameterofValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: '.popup__save-button_inactive',
  inputErrorClass: '.popup__input_state_invalid'
}

const formList = Array.from(document.querySelectorAll(parameterofValidation.formSelector));

formList.forEach((form) => {
  const formProfileValidator = new FormValidator(parameterofValidation, form);
  formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(parameterofValidation, form);
formAddCardValidator.enableValidation();
})



addButton.addEventListener("click", function () {
  elementName.value = "";
  elementPlace.value = "";
  handleOpenPopup(popUpAdd);
  
});
popUpCloseButtonAdd.addEventListener("click", function () {
  handleClosePopup(popUpAdd);
});
popUpPicCloseButton.addEventListener("click", function () {
  handleClosePopup(popUpPic);
});
openButtonPopup.addEventListener("click", function () {
  openProfilePopup();
});
closeProfileButton.addEventListener("click", function () {
  handleClosePopup(popupProfileMain);
});
formProfileElement.addEventListener("submit", submitProfileForm);
popUpSaveButton.addEventListener("submit",handlesubmitform);
renderCards();

import {Card} from './card.js';
import {FormValidator} from './formValidator.js'
import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';



const popupEditProfile = document.querySelector('.popup_profile');
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const currentProfileName = document.querySelector('.profile__name');
const currentAboutMe = document.querySelector('.profile__text');
const inputProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutMe = popupEditProfile.querySelector('.popup__input_type_text');

const popupAddCard = document.querySelector('.popup_elements');
const formAddCard= document.querySelector('#popup_elements-add');
const openAddCardPopupButton = document.querySelector('.profile__add-button');

const template = '.elements'; 
const elements = document.querySelector('.template');
const popupOpenImage = document.querySelector('.photo');
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]
const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: '.popup__save-button_inactive',
  inputErrorClass: '.popup__input_state_invalid'
}
const popupEditProfileValidator = new FormValidator(validationElements, '.popup__form_profile');

const popupAddCardValidator = new FormValidator(validationElements, '.popup__form_add');

const imagePopup = new PopupWithImage (popupOpenImage);


const addCard = (data) => {
    const card = new Card(data, template, (name, link) => {imagePopup.open(name, link)});
    cardList.addItem (card.getCard());
}

const cardList = new Section ({
    items: initialCards.reverse(),
    renderer: (item) => {addCard (item)},
}, elements)

cardList.render();
const addCardPopupForm = new PopupWithForm (popupAddCard, ({title, url}) => {addCard({name: title, link: url})}); 

const editProfilePopupForm = new PopupWithForm (popupEditProfile, ({nameprofile, text}) => {userInfo.setUserInfo({nameprofile, text})}); 

const userInfo = new UserInfo (currentProfileName, currentAboutMe);


const addProfileInfo = () => {
    const currentInfo = userInfo.getUserInfo();
    inputProfileName.value = currentInfo.name;
    inputAboutMe.value = currentInfo.job;
    popupEditProfileValidator.enableValidation();
    editProfilePopupForm.open();
}

const openAddCardPopup = () => {
    popupAddCardValidator.enableValidation();
    addCardPopupForm.open()
}

openAddCardPopupButton.addEventListener('click', openAddCardPopup);
openEditProfilePopupButton.addEventListener('click', addProfileInfo);
imagePopup.setEventListeners();
addCardPopupForm.setEventListeners();
editProfilePopupForm.setEventListeners();
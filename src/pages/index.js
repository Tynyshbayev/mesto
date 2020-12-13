import {Card} from '../components/card.js';
import {FormValidator} from '../components/formValidator.js'
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import './index.css';
const closeButtonall = document.querySelector('.popup__close-button')
const popupFormProfile = '.popup__form_profile'
const popupFormAdd = '.popup__form_add'
const popupEditProfile = document.querySelector('.popup_profile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const currentProfileName = document.querySelector('.profile__name');
const currentAboutMe = document.querySelector('.profile__text');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputAboutMe =  document.querySelector('.popup__input_type_text');
const popupAddCard = document.querySelector('.popup_elements');
const formAddCard= document.querySelector('#popup_elements-add');
const openAddPopupButton = document.querySelector('.profile__add-button');
const openEditPopupButton = document.querySelector('.profile__edit-button');
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
const popupEditProfileValidator = new FormValidator(validationElements, popupFormProfile);
popupEditProfileValidator.enableValidation();
const popupAddCardValidator = new FormValidator(validationElements, popupFormAdd);
popupAddCardValidator.enableValidation();
const imagePopup = new PopupWithImage (popupOpenImage);


const addCard = (data) => {
    
    cardList.addItem (crateCard(data).getCard());
}
const crateCard = (data) =>{
   return new Card(data, template, (name, link) => {imagePopup.open(name, link)});
}
 
const cardList = new Section ({
    items: initialCards.reverse(),
    renderer: (item) => {addCard (item)},
}, elements)

cardList.render();
const addCardPopupForm = new PopupWithForm (popupAddCard, ({cardname, imagelink}) => {addCard({name: cardname, link: imagelink})}); 

const editProfilePopupForm = new PopupWithForm (popupEditProfile, ({profilename, job}) => {userInfo.setUserInfo({profilename, job})});

const userInfo = new UserInfo (currentProfileName, currentAboutMe);

const addProfileInformation = () => {
    const currentInfo = userInfo.getUserInfo();
    inputProfileName.value = currentInfo.name;
    inputAboutMe.value = currentInfo.job;
    editProfilePopupForm.open();
    popupEditProfileValidator.hideErrors();
}

const openAddCardPopup = () => {
    popupAddCardValidator.hideErrors();
    addCardPopupForm.open()
}

openAddPopupButton.addEventListener('click', openAddCardPopup);
openEditPopupButton.addEventListener('click', addProfileInformation);
imagePopup.setEventListeners();
addCardPopupForm.setEventListeners();
editProfilePopupForm.setEventListeners();
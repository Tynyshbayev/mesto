import {Card} from '../components/card.js';
import {FormValidator} from '../components/formValidator.js'
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithSubmit} from '../components/PopupWithSubmit.js';
import {Api} from '../components/Api.js';
import './index.css';
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
const curentAvatarSelector = document.querySelector('.profile__avatar');
const template = '.elements'; 
const elements = document.querySelector('.template');
const popupOpenImage = document.querySelector('.photo');
const formUpdateAvatar = '.popup__form_avatar-update'
const popupRemoveCard = document.querySelector('.popup_remove-card');
const popupUpdateAvatar = document.querySelector('.popup_avatar-update');
const changeAvatarButton = document.querySelector('.profile__change-avatar-button')
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
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: '.popup__input_state_invalid'
}
const popupEditProfileValidator = new FormValidator(validationElements, popupFormProfile);
popupEditProfileValidator.enableValidation();

const popupAddCardValidator = new FormValidator(validationElements, popupFormAdd);
popupAddCardValidator.enableValidation();

const popupUpdateAvatarValidator = new FormValidator(validationElements, formUpdateAvatar)
popupUpdateAvatarValidator.enableValidation(); 

const imagePopup = new PopupWithImage (popupOpenImage);
const removeCardPopup = new PopupWithSubmit(popupRemoveCard);

const api = new Api ({
    token: '8979d512-ff50-43b0-b88b-551975431ae7',
    url: 'https://mesto.nomoreparties.co/v1/cohort-18'
})


const confirmAndDeleteCard = (id, card) => {
    removeCardPopup.setRemove(() => {
        api.removeCard(id)
        .then(() => card.removeCard())
        .then(() => removeCardPopup.close())
        .catch(err => console.log(err))
    })
    removeCardPopup.open();
}

const likeCard = (id, card) => {
    const likeRequest = card.getIsLiked() ? api.dislikeCard(id) : api.likeCard(id);
            likeRequest.then(res => card._likeFunction(res))
            .catch(err => console.log(err));
}
const cardList = new Section (elements);


const addCard = (data) => {//создание карточки 
    const card = new Card({    
        ...data, 
        currentUserId: userInfo.getUserId(), 
        template, 
        handleClickCard: () => {imagePopup.open(data)},
        handleRemoveCard: () => {confirmAndDeleteCard(data._id, card)},
        handleLike: () => {likeCard(data._id, card)}
        
    });
    cardList.addItem (card.getCard());
    console.log(imagePopup.open(data));
}
const addCardPopupForm = new PopupWithForm (popupAddCard, (cardData) => {
    api.addNewCard(cardData)
    .then ((cardData) => {
        addCard(cardData)
    })
    .then (() => {
        addCardPopupForm.close()
    })
    .catch((err) => {
        console.log(err)
    })
});

const editProfilePopupForm = new PopupWithForm (popupEditProfile, ({name, about}) => {
    api.editUserInfo(name, about)
    .then ((res) => {
        userInfo.setUserInfo(res.name, res.about)
    }).then (() => {
        editProfilePopupForm.close()
    })
    .catch((err) => {
        console.log(err)
    })
})


const updateAvatarPopup = new PopupWithForm (popupUpdateAvatar, ({avatarlink}) => {
    api.editUserAvatar(avatarlink)
    .then ((res) => {
        userInfo.setUserAvatar(res.avatar)
    })
    .then (() => {
        updateAvatarPopup.close()
    })
    .catch((err) => {
        console.log(err)
    })
})



const userInfo = new UserInfo (curentAvatarSelector, currentProfileName, currentAboutMe);

Promise.all ([
    api.getUserInformation (),
    api.getCards(),
]).then((values) => {
    const [userData, initialCards] = values;
    userInfo.setUserInfo(userData.name, userData.about, userData._id);
    userInfo.setUserAvatar(userData.avatar);
    const initialCardsReverse = initialCards.reverse();
    initialCardsReverse.forEach(element => {
        addCard(element);
    });
}).catch((err) => {
    console.log(err);
})

const addProfileInformation = () => {
    const currentInfo = userInfo.getUserInfo();
    inputProfileName.value = currentInfo.name;
    inputAboutMe.value = currentInfo.job;
    editProfilePopupForm.open();
    popupEditProfileValidator.hideErrors();
    popupEditProfileValidator.toggleButtonState();
}

const openAddCardPopup = () => {
    popupAddCardValidator.hideErrors();
    popupAddCardValidator.toggleButtonState();
    addCardPopupForm.open()
}

const openUpdateAvatarPopup = () => {
    popupUpdateAvatarValidator.toggleButtonState();
    popupUpdateAvatarValidator.hideErrors();
    updateAvatarPopup.open();
}

openAddPopupButton.addEventListener('click', openAddCardPopup);

openEditPopupButton.addEventListener('click', addProfileInformation);

imagePopup.setEventListeners();

addCardPopupForm.setEventListeners();

editProfilePopupForm.setEventListeners();

changeAvatarButton.addEventListener('click', openUpdateAvatarPopup);

updateAvatarPopup.setEventListeners();

removeCardPopup.setEventListeners()
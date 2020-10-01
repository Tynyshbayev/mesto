let formElement = document.querySelector('.popup__form');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__text');
let closeButton = document.querySelector('.popup__close-button');
let popupProfile =document.querySelector('.popup');
let openButtonPopupAdd = document.querySelector('.popup__save-button');
let openButtonPopup = document.querySelector('.profile__edit-button');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector('.popup__form-name');
    let jobInput = document.querySelector('.popup__form-text');
    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;
    nameProfile.textContent = nameInputValue;
    jobProfile.textContent = jobInputValue;
}

formElement.addEventListener('submit', formSubmitHandler); 
function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }

  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
function openProfilePopup() {

    openPopup(popupProfile);
  }
  openButtonPopup.addEventListener('click', openProfilePopup);




closeButton.addEventListener('click', closePopup);
closeButton.addEventListener('click', function () {
    closePopup(popupProfile);
  });
  
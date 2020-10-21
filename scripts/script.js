const formElement = document.querySelector(".popup__form");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__text");
const closeButton = document.querySelector(".popup__close-button");
const popupProfile = document.querySelector(".popup");
const openButtonPopup = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_text");

const addButton = document.querySelector(".profile__add-button");
const popUpAdd = document.querySelector("#popup_elements");
const popUpPic = document.querySelector("#popup-image");
const popUpPicCloseButton = document.querySelector(
  ".popup__close-button-image"
);

const sectionElements = document.querySelector(".elements");
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
function closePopup() {
  popupProfile.classList.remove("popup_opened");
}
function handleformSubmit(evt) {
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
function handleOpenPopup(popUpAdd) {
  popUpAdd.classList.add("popup_opened");
}
function handleClosePopup(popUpAdd) {
  popUpAdd.classList.remove("popup_opened");
}
const handleLikePressed = (event) => {
  event.target
    .closest(".elements__like")
    .classList.toggle("elements__like_active");
};

const removeCard = (event) => {
  event.target.closest(".elements__element").remove();
};
const getItems = (data) => {
  const card = template.content.cloneNode(true);
  const picOpenPls = card.querySelector(".elements__image");
  card.querySelector(".elements__title").innerText = data.name;
  picOpenPls.src = data.link;

  const cardDeleteButton = card.querySelector(".elements__delete-button");
  const likeButton = card.querySelector(".elements__like");

  cardDeleteButton.addEventListener("click", removeCard);
  likeButton.addEventListener("click", handleLikePressed);

  picOpenPls.addEventListener("click", () => {
    popUpPicImage.src = data.link;
    popUpPicText.innerText = data.name;
    handleOpenPopup(popUpPic);
  });
  return card;
};

const renderCards = () => {
  const items = initialCards.map(getItems);
  sectionElements.append(...items);
};
popUpSaveButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const item = getItems({
    name: elementName.value,
    link: elementPlace.value,
  });
  sectionElements.prepend(item);
  elementName.value = "";
  elementPlace.value = "";
  handleClosePopup(popUpAdd);
});
renderCards();

addButton.addEventListener("click", function () {
  handleOpenPopup(popUpAdd);
});
popUpCloseButtonAdd.addEventListener("click", function () {
  handleClosePopup(popUpAdd);
});
popUpPicCloseButton.addEventListener("click", function () {
  handleClosePopup(popUpPic);
});
openButtonPopup.addEventListener("click", () => openPopup());
closeButton.addEventListener("click", () => closePopup());
formElement.addEventListener("submit", handleformSubmit);

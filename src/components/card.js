export class Card {
    constructor ({name, link, likes, _id, owner, currentUserId, template, handleClickCard, handleRemoveCard, handleLike}) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._cardId = _id,
        this._ownerId = owner._id;
        this._curentOwnerId = currentUserId;
        this._template = document.querySelector(template).content.querySelector('.elements__element');
        this._handleClickCard = handleClickCard;
        this._handleRemoveCard = handleRemoveCard;
        this._handleLike = handleLike,
        this._isLiked = this._likes.some(like => like._id === this._curentOwnerId)
    }

    getCard () {
        this._card = this._template.cloneNode(true);
        this._cardImage = this._card.querySelector('.elements__image');
        this._cardImageCaption = this._card.querySelector('.elements__title');
        this._cardLikeButton = this._card.querySelector('.elements__like') ;
        this._cardLikeCounter = this._card.querySelector('.elements__like-counter');
        this._cardDeleteButton = this._card.querySelector('.elements__delete-button');
        
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardImageCaption.textContent = this._name;
        this._cardLikeCounter.textContent = this._likes.length;
       
        this._showLikeButtonState();
        this._hideRemoveButton();
        this._setEventListeners();
        return this._card;
    }
    _hideRemoveButton() {
        if (this._curentOwnerId !== this._ownerId) {
            this._cardDeleteButton.classList.add('elements__delete-button_inactive');
        }
    }

    _showLikeButtonState() {
        if (this._isLiked) {
            this._cardLikeButton.classList.add('elements__like_active')
        }
    }
    getIsLiked () {
        return this._isLiked;
    }
    
    removeCard() {
        this._card.remove();
        this._card = null;
    }
    _likeFunction(res) {
        if(this._isLiked){
            this._cardLikeButton.classList.remove('elements__like_active');
            this._cardLikeCounter.textContent = res.likes.length;
            this._isLiked = !this._isLiked
        } else {
            this._cardLikeButton.classList.add('elements__like_active');
            this._cardLikeCounter.textContent = res.likes.length;
            this._isLiked = !this._isLiked
        }
    }
    _setEventListeners() {
        this._cardDeleteButton.addEventListener('click', () => this._handleRemoveCard());
        this._cardLikeButton.addEventListener('click', () => this._handleLike());
        this._cardImage.addEventListener('click', () => this._handleClickCard());
    }
}
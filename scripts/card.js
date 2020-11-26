export class Card {
    constructor (data, templateSelector, openImagePreview) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content.querySelector('.elements__element');
        this._openImagePreview = openImagePreview;
    }
    getCard () {
        this._card = this._template.cloneNode(true);
        this._picsrc = card.querySelector(".elements__image");
        this._card.querySelector('.elements__image').alt = this._name;
        this._picsrc.src = data.link;
        this._card.querySelector(".elements__title").innerText = this._name;
      
        this._setEventLiseners();

        return this._card;
}
_removeCard () {
    this._card.remove();
}

_handleLikePressed () {
    this._card.querySelector('.elements__like').classList.toggle('elements__like_active');
}

_setEventLiseners() {
    this._card.querySelector('.elements__delete-button').addEventListener('click', () => this._removeCard());
    this._card.querySelector('.elements__like').addEventListener('click', () => this._handleLikePressed());
    this._card.querySelector('.elements__image').addEventListener('click', () => this._openImagePreview(this._link, this._name));
}
}
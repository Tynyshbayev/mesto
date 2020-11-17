export class Card {
    constructor (data, templateSelector, picOpenPls) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content.querySelector('.elements__element');
        this._picOpenPls = picOpenPls;
    }
    getCard () {
        this._card = this._template.cloneNode(true);
        this._picOpenPls = card.querySelector(".elements__image");
        this._card.querySelector(".elements__title").innerText = data.name;
        this._picOpenPls.src = data.link;
      
        this._setEventLiseners();

        return this._card;
}
_removeCard () {
    this._event.target.closest(".elements__element").remove();
}

_handleLikePressed () {
    this._card.querySelector('.elements__like').classList.toggle('elements__like_active');
}

_setEventLiseners() {
    this._card.querySelector('.elements__delete-button').addEventListener('click', () => this._removeCard());
    this._card.querySelector('.elements__like').addEventListener('click', () => this._handleLikePressed());
    this._card.querySelector('.elements__image').addEventListener('click', () => this._picOpenPls(this._link, this._name));
}
}
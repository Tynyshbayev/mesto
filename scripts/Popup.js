export class Popup {
    constructor (popup) {
        this._popup = popup;
        console.log(popup);
        this._popupOpened = 'popup_opened';
        this._closeButton = popup.querySelector('.popup__close-button');
    }

    open () {
        this._popup.classList.add(this._popupOpened);
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close () {
        this._popup.classList.remove(this._popupOpened);
        document.removeEventListener('keydown',this._handleEscClose.bind(this));
    }

    _handleEscClose (event) {
        if (event.key === "Escape"){this.close()}}

    _closeClickOverlay (event) {
        if(event.target !==  event.currentTarget) {
            return
        }
        this.close();
    }

    setEventListeners () {
        this._closeButton.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('click', this._closeClickOverlay.bind(this));
    }
}
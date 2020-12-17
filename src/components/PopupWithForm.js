import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
    constructor (popup, submitFormHandler) {
        super(popup);
        
        this._popupForm = this._popup.querySelector('.popup__form');
        this._submitButton = this._popupForm.querySelector('.popup__save-button');
        this._inputFields = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this.submitFormHandler = submitFormHandler;
        
    }
    _toggleButtonState(state) {
        if(state) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить';
        }
    }
    _getInputValues () {
        this._inputValues = {};
        this._inputFields.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    _submitHandler () {
        event.preventDefault();
        this.submitFormHandler(this._getInputValues ());
        this._toggleButtonState(true);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submitHandler.bind(this));
    }
    
    close() {
        super.close();
        this._popupForm.reset();
    } 
}
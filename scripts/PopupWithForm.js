import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
    constructor (popup, submitFormHandler) {
        super(popup);
        this._popupForm = document.querySelector('.popup__form');
        this._inputFields = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this.submitFormHandler = submitFormHandler;
    }
    
    _getInputValues () {
        this._inputValues = {};
        this._inputFields.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        console.log(this._inputValues);
        return this._inputValues;
    }

    _submitHandler (event) {
        event.preventDefault();
        this.submitFormHandler(this._getInputValues ());
        this.close();
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
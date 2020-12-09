import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
    constructor (popup, submitFormHandler) {
        super(popup);
        this._popupForm =this._popup.querySelector('.popup__form');
        this._inputFields = this._popup.querySelectorAll('.popup__input');
        this.submitFormHandler = submitFormHandler;
        console.log(this._popupForm);
    }
    
    _getInputValues () {
        this._inputValues = {};
        this._inputFields.forEach((input) => {
            this._inputValues[input.title] = input.value;
        });
        return this._inputValues;
    }

    _submitHandler (event) {
        event.preventDefault();
        this.submitFormHandler(this._getInputValues ());
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler.bind(this));
    }
    
    close() {
        super.close();
        this._popupForm.reset();
    } 
}
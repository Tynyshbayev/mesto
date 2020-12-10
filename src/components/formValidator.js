export class FormValidator {

    constructor (settings, formElement) {
        this._formElement = document.querySelector(formElement);
        this._inputElements = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
        this._submitButton = this._formElement.querySelector(settings.submitButtonSelector);
       
        this._inactiveButtonStatus = settings.inactiveButtonClass;
        this._inputError = settings.inputErrorClass;
    }
    
 _showError(input){
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    
}
 _hideError(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(this._inputErrorClass);
}
_checkInputValidity(input) {
    if (input.checkValidity()) {
        this._hideError (input);
    } else {
        this._showError(input);
    }
}


_toggleButtonState() {
    if (this._formElement.checkValidity()) {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    } else {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
}

_setEventListeners() {
    this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    this._inputElements.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
    });
}

 enableValidation() {
    this._setEventListeners();
}
}
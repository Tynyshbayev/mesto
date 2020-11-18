export class FormValidator {

constructor (settings, formElement) {
        this._formElement = formElement;
        this._inputElements = Array.from(formElement.querySelectorAll(settings.inputSelector));
        this._submitButton = formElement.querySelector(settings.submitButtonSelector);
        this._inactiveButtonStatus = settings.inactiveButtonClass;
        this._inputError = settings.inputErrorClass;
    }
    
 _showError(){
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    
}
 _hideError() {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(this._inputErrorClass);
}
_checkInputValidity(inputElement) {
    if (inputElement.checkValidity()) {
        this._hideError (inputElement);
    } else {
        this._showError(inputElement);
    }
}


_toggleButtonState() {
    if (this._formElement.checkValidity()) {
        this._buttonElement.classList.remove(parameterofValidation.inactiveButtonClass);
        this._buttonElement.disabled = false;
    } else {
        this._buttonElement.classList.add(parameterofValidation.inactiveButtonClass);
        this._buttonElement.disabled = true;
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
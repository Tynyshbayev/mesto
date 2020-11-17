export class FormValidator {

constructor (settings, form) {
        this._form = form;
        this._inputElements = Array.from(form.querySelectorAll(settings.inputSelector));
        this._submitButton = form.querySelector(settings.submitButtonSelector);
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
 _checkInputValidity() {
    if (input.checkValidity()) {
        this._hideError (formElement, input);
    } else {
        this._showError(formElement, input);
    }
};

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
    const inputElements = Array.from(formElement.querySelectorAll(parameterofValidation.inputSelector));
    const buttonElement = formElement.querySelector(parameterofValidation.submitButtonSelector);

    inputElements.forEach((input) => {
        this._input.addEventListener ('input', (event) => {
            this._checkInputValidity(formElement, event.target);
            this._toggleButtonState(formElement, buttonElement);
        });
    });

    toggleButtonState(formElement, buttonElement);
}

 enableValidation() {
    this._setEventListeners();
}
}
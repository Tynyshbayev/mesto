export class FormValidator {
    constructor(settings, formElement) {
      this._formElement = document.querySelector(formElement);
      this._inputElements = Array.from(
        this._formElement.querySelectorAll(settings.inputSelector)
      );
      this._submitButton = this._formElement.querySelector(
        settings.submitButtonSelector
      );
      console.log(this._submitButton);
      this._inactiveButtonStatus = settings.inactiveButtonClass;
      console.log(this._inactiveButtonStatus);
      this._inputError = settings.inputErrorClass;
    }
    _showError(input) {
      const errorElement = this._formElement.querySelector(`#${input.id}-error`);
      
      errorElement.textContent = input.validationMessage;
      input.classList.add(this._inputErrorClass);
    }
    _hideError(input) {
      const errorElement = this._formElement.querySelector(`#${input.id}-error`);
      errorElement.textContent = ' ';
      input.classList.remove(this._inputErrorClass);
    }
    _checkInputValidity(input) {
      if (input.checkValidity()) {
        this._hideError(input);
      } else {
        this._showError(input);
      }
    }
    toggleButtonState() {
      if (this._formElement.checkValidity()) {
        this._submitButton.classList.remove(this._inactiveButtonStatus);
        this._submitButton.disabled = false;
      } else {
        this._submitButton.classList.add(this._inactiveButtonStatus);
        this._submitButton.disabled = true;
      }
    }
    _setEventListeners() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._inputElements.forEach((input) => {
            this._hideError(input);
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.toggleButtonState();
            });
        });
    }
    hideErrors(){
        this._inputElements.forEach(item => {
            this._hideError(item);
        })
    }
    enableValidation() {
    this.toggleButtonState();
      this._setEventListeners();
    }
  }
  
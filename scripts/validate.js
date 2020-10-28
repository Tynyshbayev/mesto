const parameterofValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: '.popup__save-button_inactive',
    inputErrorClass: '.popup__input_state_invalid'
}

function showError(formElement, input){
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(parameterofValidation.inputErrorClass);
    
}
function hideError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(parameterofValidation.inputErrorClass);
}
function checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        hideError (formElement, input);
    } else {
        showError(formElement, input);
    }
};

function toggleButtonState(formElement, buttonElement) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(parameterofValidation.inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(parameterofValidation.inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

function setEventListeners(formElement) {
    const inputElements = Array.from(formElement.querySelectorAll(parameterofValidation.inputSelector));
    const buttonElement = formElement.querySelector(parameterofValidation.submitButtonSelector);

    inputElements.forEach((input) => {
        input.addEventListener ('input', (event) => {
            checkInputValidity(formElement, event.target);
            toggleButtonState(formElement, buttonElement);
        });
    });

    toggleButtonState(formElement, buttonElement);
}

function enableValidation() {
    const formElements = Array.from(document.querySelectorAll(parameterofValidation.formSelector));

    formElements.forEach( (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners (form);
    })
}

enableValidation(parameterofValidation);

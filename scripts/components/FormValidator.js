export default class FormValidator {

    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._config.errorInputClass);
        errorElement.classList.add(this._config.errorClass);
        errorElement.textContent = errorMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._config.errorInputClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.errorButtonClass);
            buttonElement.setAttribute('disabled', 'minus');
        } else {
            buttonElement.classList.remove(this._config.errorButtonClass);
            buttonElement.removeAttribute('disabled', 'minus');
        }
    };

    _setEventListeners() {
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._form.querySelector(this._config.buttonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    popupFormClean() {
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        const buttonElement = this._form.querySelector(this._config.buttonSelector);
        this._toggleButtonState(inputList, buttonElement);
    }

    enableValidation() {
        document.querySelector('.popup__form').addEventListener('submit', function (evt) {
            evt.preventDefault();        
        });
        this._setEventListeners();
    }
};


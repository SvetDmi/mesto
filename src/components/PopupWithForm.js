import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popup = document.querySelector(popupSelector);

    };

    _getInputValues() {
        const inputList = this._popup.querySelectorAll('.popup__input');
        const formValues = {};
        inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    };

    popupClose() {
        super.popupClose();
        this._form = this._popup.querySelector('.popup__form');
        this._form.reset();
    };

    submitForm(evt) {
        evt.preventDefault();
        const inputData = this._getInputValues();
        this._handleFormSubmit(inputData);
       
      }
      setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', this.submitForm.bind(this));
      }


}

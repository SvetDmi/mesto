import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    };

    _getInputValues() {
        this._inputList = this._element.querySelector('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
            this._formValues[input.job] = input.value;
            this._formValues[input.title] = input.value;
            this._formValues[input.link] = input.value;
        });
        console.log(this._formValues);
        return this._formValues;

    };


    popupClose() {
        super.popupClose();
        this._form = this._popup.querySelector('.popup__form');
        this._form.reset();
    };

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

        });

    };

}

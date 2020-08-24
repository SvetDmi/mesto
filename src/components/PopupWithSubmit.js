import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
    constructor({ popupSelector, submit }) {
        super(popupSelector);
        this._handleFormSubmit = submit;
        this._popup = document.querySelector(popupSelector);
    };

    // _deleteCard() {
    //     this._poup.querySelector('.button')
    //     // this._element.remove();
    // }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            this._submit();
        });
    };

}
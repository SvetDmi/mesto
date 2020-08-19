import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._title = this._popup.querySelector('.popup__title');
        this._link = this._popup.querySelector('.popup__img');


    };

    popupOpen(data) {
        super.popupOpen();
        this._title.textContent = data.title;
        this._link.src = data.link;
        this._link.alt = data.title;
    };

}

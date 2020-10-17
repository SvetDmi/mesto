import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);  
    };

    popupOpen(data) {
        super.popupOpen();
        this._popup.querySelector('.popup__title').textContent = data.name;
        this._popup.querySelector('.popup__img').src = data.link;
        this._popup.querySelector('.popup__img').alt = data.name;
    };
}

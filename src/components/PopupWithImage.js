import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    };

    popupOpen(name, link) {
        super.popupOpen();
        this._popup.querySelector('.popup__title').textContent = name;
        this._popup.querySelector('.popup__img').src = link;
        this._popup.querySelector('.popup__img').alt = name;
    };

}


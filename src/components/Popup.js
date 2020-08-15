

import { ESC_CODE } from '../utils/constants.js';


export default class Popup {
    constructor(popupSelector) {

        this._popup = document.querySelector(popupSelector);
    };

    popupOpen() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._popupCloseEsc);

    };

    popupClose() {

        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._popupCloseEsc);
    }

    _popupCloseEsc = (evt) => {
        if (evt.code === ESC_CODE) {
            this.popupClose();
        }
    }

    _popupCloseOverlay = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            this.popupClose();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.popupClose()
        });
        this._popup.addEventListener('click', this._popupCloseOverlay)

    }
}


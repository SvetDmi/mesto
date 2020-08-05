export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    };

    popupOpen() {
        this._element.classList.add('popup_opened');    
        // document.addEventListener('keydown', popupCloseEsc);
        // popup.addEventListener('click', popupCloseOverlay);
    };
    
    popupClose() {
        this._element.classList.remove('popup_opened');
        // document.removeEventListener('keydown', popupCloseEsc);
        //; popup.removeEventListener('click', popupCloseOverlay);
    }
    
    _popupCloseEsc(evt) {
        if (evt.key === 'Escape') {
            this._element = document.querySelector('.popup_opened');
            popupClose();
        }
    };
    
    _popupCloseOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            popupClose(evt.target);
        }
    };

    setEventListeners(){
        this._element('.popup__close').addEventListener('click', () => {
            popupClose();
        });
    };
}
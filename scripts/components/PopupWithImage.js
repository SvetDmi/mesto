import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (data, popupSelector) {
        super(popupSelector);
        this._name = data.name;
        this._link = data.link;  
    };

    popupOpen() {
       
        this._element.querySelector('.popup__title').textContent = this._name;
        this._element.querySelector('.popup__img').src = this._link; 
        super.popupOpen();     
    };    
}

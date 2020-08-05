import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    };

    _getInputValues(){
        this._inputList = this._element.querySelector('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
    });
        return this._formValues;
        };
    

    popupOpen() {
        
        this._element.querySelector('.popup__title').textContent = this._name;
        this._element.querySelector('.popup__img').src = this._link; 
        super.popupOpen();  
    };

    popupClose() {        
        evt.preventDefault();
        super.popupClose();
    };

    // setEventListeners() {
    //     super.setEventListeners();
    //     this._element.addEventListener('submit', (evt) => {
    //         evt.preventDefault();
    //         this._handleFormSubmit(this._getInputValues());
    //         this._element.reset();
    //     });       
    // };

}

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
    };
    popupOpen(card) {
        super.popupOpen();
        this._card = card;        
    };

   handleFormSubmit(card) {
    this._card = card;
    this.submitForm = submitForm;    
   };
    _submitForm(evt) {
        evt.preventDefault();        
        this.handleFormSubmit();       
      };
      setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', this._submitForm.bind(this));
      }
    }

  
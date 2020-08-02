import { popupOpen } from './utils.js';
import { layout } from './index.js';

export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;        
        this._cardSelector = cardSelector;            
    }

     _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__item')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__img').src = this._link;
        this._element.querySelector('.elements__img').alt = this._name;
        return this._element;
    }

    _likeCard() {
        this._element.querySelector('.elements__like')
            .classList.toggle('elements__like_active');
    }

    _deleteCard() {
        this._element.querySelector('.elements__trash')
        this._element.remove();
    }

    _setEventListeners() {
        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._likeCard();
        });
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.elements__img').addEventListener('click', () => {
            popupOpen(layout);
            layout.querySelector('.popup__title').textContent = this._name;
            layout.querySelector('.popup__img').src = this._link;
        });
    }
}

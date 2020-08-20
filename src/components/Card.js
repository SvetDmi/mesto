export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._data = data;
        this._title = data.title;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._element.querySelector('.elements__title').textContent = this._title;
        this._element.querySelector('.elements__img').src = this._link;
        this._element.querySelector('.elements__img').alt = this._title;
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
            this._likeCard()
        });
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._deleteCard()
        });
        this._element.querySelector('.elements__img').addEventListener('click', () => {
            this._handleCardClick()

        });
    }
}

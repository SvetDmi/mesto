export default class Card {
    constructor({ data, handleCardClick, likesCard, deleteCard, userId }, cardSelector) {
    this._data = data;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._likesCard = likesCard;
    this._deleteCard = deleteCard; 

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
  _showTrash = () => {
    this._element.querySelector('.elements__trash').classList.add('elements__trash_active')
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._element.querySelector('.elements__title').textContent = this._data.name;
        this._element.querySelector('.elements__img').src = this._data.link;
        this._element.querySelector('.elements__img').alt = this._data.name;

    if (this._userId === this._ownerId) {
      this._showTrash();
    }

    this._likesCounter = this._element.querySelector('.elements__like-count');
    this._likesCounter.textContent = this._likes.length;

    this._showLikes(this._userId, this._likes);

    this._setEventListeners();
    return this._element;
  }

  deleteCard = () => {    
    this._element.remove();
    this._element = null;    
  }

  likesCard = () => {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

_showLikes(_userId, likes) {
    likes.forEach(element => {
      element._id === this._userId
        ? this._element.querySelector('.elements__like').classList.add('elements__like_active')
        : null
    });
  }

  isLikes() {
    if (!this._element.querySelector('.elements__like').classList.contains('elements__like_active')) {
      this._likes.length = this._likes.length - 1;
      this._likesCounter.textContent = this._likes.length;
    } else {
      this._likes.length = this._likes.length + 1;
      this._likesCounter.textContent = this._likes.length;
    }
  }

  _setEventListeners() {
    this._element.querySelector('.elements__img').addEventListener('click', this._handleCardClick);
    this._element.querySelector('.elements__trash').addEventListener('click',  this._deleteCard);
    this._element.querySelector('.elements__like').addEventListener('click', this._likesCard);
  }
}
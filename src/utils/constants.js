export const popupProfile = document.querySelector('.popup_type_profile');
export const popupElement = document.querySelector('.popup_type_element');
export const popupLayout = document.querySelector('.popup_type_layout');


export const buttonOpenProfile = document.querySelector('.profile__edit');
export const popupSaveProfile = popupProfile.querySelector('.popup__form');

export const buttonAddElement = document.querySelector('.profile__add');
export const popupSaveElement = popupElement.querySelector('.popup__form');

export const buttonCloseProfile = popupProfile.querySelector('.popup__close');
export const buttonCloseElement = popupElement.querySelector('.popup__close');
export const buttonCloselayout = popupLayout.querySelector('.popup__close');

export const cardItemsSelector = '.cards__items';
export const ESC_CODE = 'Escape';

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    errorInputClass: 'popup__input_error',
    errorClass: 'popup__input-error_active',
    errorButtonClass: 'popup__save_inactive'
};

export const user = {
    nameSelector: '.profile__title',
    jobSelector: '.profile__text',
};

export const token = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-14',
    headers: {
        authorization: '4052e31b-ecae-493f-95e1-b20615aa15dd',
        'Content-Type': 'application/json'
    }
};


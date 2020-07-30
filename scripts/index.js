import Card from './card.js';
import { items } from './massiv.js';
import FormValidator from './formValidator.js';
import { config } from './formValidator.js';

const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
const buttonOpenProfile = document.querySelector('.profile__edit');
const popupSaveProfile = popupProfile.querySelector('.popup__form');
const inputName = popupSaveProfile.querySelector('.popup__input_subject_name');
const inputJob = popupSaveProfile.querySelector('.popup__input_subject_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');

const popupElement = document.querySelector('.popup_type_element');
const buttonAddElement = document.querySelector('.profile__add');
const popupSaveElement = popupElement.querySelector('.popup__form_element');


export const layout = document.querySelector('.popup_type_layout');
export const layoutTitle = layout.querySelector('.popup__title_layout');
export const layoutImg = layout.querySelector('.popup__img');

const buttonCloseProfile = popupProfile.querySelector('.popup__close');
const buttonCloseElement = popupElement.querySelector('.popup__close');
const buttonCloselayout = layout.querySelector('.popup__close');


items.forEach((item) => {
    const card = new Card(item, '.elements');
    const cardElement = card.generateCard();
    document.querySelector('.cards__items').prepend(cardElement);
});

const popupProfileValidatior = new FormValidator(config, popupProfileForm);
popupProfileValidatior.enableValidation();


const popupElementValidatior = new FormValidator(config, popupElement);
popupElementValidatior.enableValidation();

function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseEsc);
    popup.addEventListener('click', popupCloseOverlay);
}

function popupClose(popup) {

    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseEsc);
    popup.removeEventListener('click', popupCloseOverlay);
}

function popupCloseEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        popupClose(openedPopup);
    }
}

function popupCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupClose(evt.target);
    }
}

function profileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose(popupProfile);
}

buttonAddElement.addEventListener('click', function () {
    popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupOpen(popupElement);
})

buttonCloseElement.addEventListener('click', function () {
    popupClose(popupElement);
})

buttonCloselayout.addEventListener('click', function () {
    popupClose(layout);
})

buttonOpenProfile.addEventListener('click', function () {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupProfileValidatior.popupFormClean();
    popupOpen(popupProfile);

});

popupSaveProfile.addEventListener('submit', function () {
    console.log('hello');
    profileFormSubmit(popupProfile);
});

buttonCloseProfile.addEventListener('click', function () {
    popupClose(popupProfile);
});
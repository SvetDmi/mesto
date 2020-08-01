import Card from './card.js';
import FormValidator from './formValidator.js';
import { items, config } from './massiv.js';
import { popupOpen, popupClose } from './utils.js';

const popupProfile = document.querySelector('.popup_type_profile');
const buttonOpenProfile = document.querySelector('.profile__edit');
const popupSaveProfile = popupProfile.querySelector('.popup__form');
const inputName = popupSaveProfile.querySelector('.popup__input_subject_name');
const inputJob = popupSaveProfile.querySelector('.popup__input_subject_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');

const popupElement = document.querySelector('.popup_type_element');
const buttonAddElement = document.querySelector('.profile__add');
const popupSaveElement = popupElement.querySelector('.popup__form');
const inputTitle = popupElement.querySelector('.popup__input_subject_pic-title');
const inputLink = popupElement.querySelector('.popup__input_subject_pic-link');


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

const popupProfileValidatior = new FormValidator(config, popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, popupElement);
popupElementValidatior.enableValidation();

function profileFormSubmit(evt) {  
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose(popupProfile);
}

function elementFormSubmit(evt) {
    evt.preventDefault();
    items.push({name: inputTitle.value, 
        link: inputLink.value});
    const item = items[items.length-1];
    const card = new Card(item, '.elements');    
    const cardElement = card.generateCard();
    document.querySelector('.cards__items').prepend(cardElement);
    popupClose(popupElement);    
}

buttonOpenProfile.addEventListener('click', function () {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupProfileValidatior.popupFormClean();
    popupOpen(popupProfile);    
});

buttonAddElement.addEventListener('click', function () {
    popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupOpen(popupElement);
});

popupSaveProfile.addEventListener('submit', profileFormSubmit);

popupSaveElement.addEventListener('submit', elementFormSubmit);


buttonCloseProfile.addEventListener('click', function () {
    popupClose(popupProfile);
});

buttonCloseElement.addEventListener('click', function () {
    popupClose(popupElement);
});

buttonCloselayout.addEventListener('click', function () {
    popupClose(layout);
});


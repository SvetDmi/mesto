import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import { items, config } from '../utils/massiv.js';
// import { popupOpen, popupClose } from '../utils/utils.js';

const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileSelector = '.popup_type_profile';
const buttonOpenProfile = document.querySelector('.profile__edit');
// const popupSaveProfile = popupProfile.querySelector('.popup__form');
// const inputName = popupSaveProfile.querySelector('.popup__input_subject_name');
// const inputJob = popupSaveProfile.querySelector('.popup__input_subject_job');
// const profileName = document.querySelector('.profile__title');
// const profileJob = document.querySelector('.profile__text');

const popupElement = document.querySelector('.popup_type_element');
const buttonAddElement = document.querySelector('.profile__add');
const popupSaveElement = popupElement.querySelector('.popup__form');
const inputTitle = popupElement.querySelector('.popup__input_subject_pic-title');
const inputLink = popupElement.querySelector('.popup__input_subject_pic-link');


export const layout = document.querySelector('.popup_type_layout');
// const cardItem = document.querySelector('.cards__items');
const cardItemsSelector = '.cards__items';

const buttonCloseProfile = popupProfile.querySelector('.popup__close');
const buttonCloseElement = popupElement.querySelector('.popup__close');
const buttonCloselayout = layout.querySelector('.popup__close');


const cardList = new Section({
    items: items,
    renderer: (item) => {
        const card = new Card(item, '.elements');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
  },
  cardItemsSelector
);
cardList.renderItems();

const popupProfileValidatior = new FormValidator(config, popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, popupElement);
popupElementValidatior.enableValidation();

export const popupFormLayout = new PopupWithImage(items, layout);
const popupFormProfile = new PopupWithForm(popupProfileSelector);
const popupFormElement = new PopupWithForm(popupElement);

// function elementFormSubmit(evt) {
//     evt.preventDefault();
//     items.push({name: inputTitle.value, 
//         link: inputLink.value});
//     const item = items[items.length-1];
//     const card = new Card(item, '.elements');    
//     const cardElement = card.generateCard();
//     cardItem.prepend(cardElement);
//     popupClose(popupElement);    
// }
// function profileFormSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = inputName.value;
//     profileJob.textContent = inputJob.value;
//     popupClose(popupProfile);

// }

buttonOpenProfile.addEventListener('click', function () {
    // inputName.value = profileName.textContent;
    // inputJob.value = profileJob.textContent;
    // popupProfileValidatior.popupFormClean();
    popupFormProfile.popupOpen();    
});

buttonAddElement.addEventListener('click', function () {
    popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupFormElement.popupOpen();
});

// popupSaveProfile.addEventListener('submit', profileFormSubmit);

// popupSaveElement.addEventListener('submit', elementFormSubmit);


buttonCloseProfile.addEventListener('click', function () {
    popupFormProfile.popupClose();
});

buttonCloseElement.addEventListener('click', function () {
    popupFormElement.popupClose();
});

buttonCloselayout.addEventListener('click', function () {
    popupLayout.popupClose();
});


import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { items, config, user } from '../utils/massiv.js';
import * as consts from '../utils/constants.js';

const cardList = new Section({
    items: items,
    renderer: (item) => {
        const card = new Card(item, '.elements', '.popup_type_layout');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
},
    consts.cardItemsSelector
);
cardList.renderItems();

const popupProfileValidatior = new FormValidator(config, consts.popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, consts.popupElement);
popupElementValidatior.enableValidation();

const popupFormLayout = new PopupWithImage('.popup_type_layout');

const popupFormElement = new PopupWithForm('.popup_type_element');

const userInfo = new UserInfo(user);

const popupFormProfile = new PopupWithForm('.popup_type_profile');


consts.buttonOpenProfile.addEventListener('click', function () {
    userInfo.getUserInfo();
    userInfo.putUserInfo(submitProfile.elements.name, submitProfile.elements.job);
    popupProfileValidatior.popupFormClean();
    popupFormProfile.popupOpen();
});

consts.buttonAddElement.addEventListener('click', function () {
    consts.popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupFormElement.popupOpen();
});

consts.popupSaveProfile.addEventListener('submit', function () {
    userInfo.setUserInfo(submitProfile.elements.name, submitProfile.elements.job);
    popupFormProfile.popupClose();
});

consts.popupSaveElement.addEventListener('submit', function () {
    popupFormElement.popupClose();
});

consts.buttonCloseProfile.addEventListener('click', function () {
    popupFormProfile.popupClose();
});

consts.buttonCloseElement.addEventListener('click', function () {
    popupFormElement.popupClose();
});

consts.buttonCloselayout.addEventListener('click', function () {
    popupFormLayout.popupClose();
});


import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import Api from '../components/Api';
import { items } from '../utils/massiv.js';
import {
    popupProfile, popupElement, popupLayout, buttonOpenProfile, popupSaveProfile,
    buttonAddElement, popupSaveElement, buttonCloseProfile, buttonCloseElement,
    buttonCloselayout, cardItemsSelector, ESC_CODE, config, user, token
} from '../utils/constants.js';

const api = new Api(token);

// КАРТОЧКИ

const renderCard = data => {
    const card = new Card({
        data: data,
        handleCardClick: () => {
            popupFormLayout.popupOpen(data);
        },
    },
        '.elements'
    );
    cardList.addItem(card.generateCard());
}
const cardList = new Section({
    data: [],
    renderer: renderCard
},
    cardItemsSelector
);

api.getInitialCards()
    .then((data) => {
        cardList.renderItems(data)
    })
    .catch((err) => {
        console.log(err)
    });


const popupFormElement = new PopupWithForm({
    popupSelector: '.popup_type_element',
    handleFormSubmit: (data) => {
        renderCard(data)
    }
}
);
popupFormElement.setEventListeners();

// ВАЛИДАТОРЫ

const popupProfileValidatior = new FormValidator(config, popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, popupElement);
popupElementValidatior.enableValidation();

const popupFormLayout = new PopupWithImage('.popup_type_layout');
popupFormLayout.setEventListeners();

// ПРОФИЛЬ

const userInfo = new UserInfo(user);
const popupFormProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data)
    }
});
popupFormProfile.setEventListeners();

const popupFormAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (data) => {
        renderCard(data)
    }
}
);
popupFormAvatar.setEventListeners();

// const popupWithSubmit = new PopupWithSubmit({
//     popupSelector: '.popup_type_update',
//     // submit: 

// });

// BUTTONS

buttonOpenProfile.addEventListener('click', function () {
    const data = userInfo.getUserInfo();
    const inputName = popupSaveProfile.querySelector('.popup__input_subject_name');
    const inputJob = popupSaveProfile.querySelector('.popup__input_subject_job');
    inputName.value = data.name;
    inputJob.value = data.job;
    popupProfileValidatior.popupFormClean();
    popupFormProfile.popupOpen();
});

buttonAddElement.addEventListener('click', function () {
    popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupFormElement.popupOpen();
});

popupSaveProfile.addEventListener('submit', function () {
    popupFormProfile.popupClose();
});
popupSaveElement.addEventListener('submit', function () {
    popupFormElement.popupClose();
});

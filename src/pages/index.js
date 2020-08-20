import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { items, config, user } from '../utils/massiv.js';
import * as consts from '../utils/constants.js';

const renderCard = item => {
    const card = new Card({
        data: item,
        handleCardClick: () => {
            popupFormLayout.popupOpen(item);
        },
    },
        '.elements'
    );
    cardList.addItem(card.generateCard());
}

const cardList = new Section({
    items: items,
    render: renderCard
},
    consts.cardItemsSelector
);

const popupFormElement = new PopupWithForm({
    popupSelector: '.popup_type_element',
    handleFormSubmit: (data) => {
        renderCard(data)
    }
},
    popupFormElement.popupClose()
);
popupFormElement.setEventListeners();



const popupProfileValidatior = new FormValidator(config, consts.popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, consts.popupElement);
popupElementValidatior.enableValidation();

const popupFormLayout = new PopupWithImage('.popup_type_layout');
popupFormLayout.setEventListeners();


const userInfo = new UserInfo(user);
const popupFormProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data)
    }
});
popupFormProfile.setEventListeners();

consts.buttonOpenProfile.addEventListener('click', function () {
    const data = userInfo.getUserInfo();
    const inputName = consts.popupSaveProfile.querySelector('.popup__input_subject_name');
    const inputJob = consts.popupSaveProfile.querySelector('.popup__input_subject_job');
    inputName.value = data.name;
    inputJob.value = data.job;
    popupProfileValidatior.popupFormClean();
    popupFormProfile.popupOpen();
});

consts.buttonAddElement.addEventListener('click', function () {
    consts.popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupFormElement.popupOpen();
});

consts.popupSaveProfile.addEventListener('submit', function () {
    popupFormProfile.popupClose();
});
consts.popupSaveElement.addEventListener('submit', function () {
    popupFormElement.popupClose();
});

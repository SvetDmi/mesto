import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import Api from '../components/Api';

import {
    popupProfile, popupElement, popupAvatar, buttonOpenProfile, 
    buttonAddElement, popupSaveElement, buttonEditAvatar, cardItemsSelector, config, user
} from '../utils/constants.js';

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
        authorization: '5e818745-1601-43fc-b5f2-fedadb1bc162',
        'Content-Type': 'application/json'
    }
  });
let userId

api.getAllInfo()
.then(res =>  { 
    const data = res[0];
    const userData = res[1]; 
userInfo.setUserInfo(userData)
userInfo.setUserAvatar(userData)
userId = userData._id;
cardList.renderItems(data.reverse())
})

.catch(err => {
    console.log(err)
});

const renderCard = data => {
    const card = new Card({
        data: data,                
        handleCardClick: () => {
            popupFormLayout.popupOpen(data);          
        },

        likesCard: (evt) => {
            if (evt.target.classList.contains('elements__like_active')) {
                api.deleteLike(data._id)
                .then((res) => {
                    card.likesCard(evt)
                    card.isLikes(res.likes);
                })
                .catch((err) => console.log(err))
            } else {
                api.doLike(data._id)
                .then((res) => {
                    card.likesCard(evt),
                    card.isLikes(res.likes);
                })
                .catch((err) => console.log(err))
            }
            },

        deleteCard: () => {
            popupFormDelete.popupOpen(data._id);
            popupFormDelete.handleFormSubmit = () => { 
        
                api.deleteCard(data._id)      
                    .then((res) => {
                        card.deleteCard(res);
                        popupFormDelete.popupClose();               
        })
                    .catch((err) => console.log(err))                    
            }
          },        
                
        userId: userId
       
        },

        '.elements'
);
    cardList.addItem(card.generateCard());
    
};

const cardList = new Section({
    data: [],
    renderer:  (data) => { return renderCard (data)}
},
    cardItemsSelector
);

const popupFormDelete = new PopupWithSubmit({
    popupSelector:'.popup_type_update' 

});
popupFormDelete.setEventListeners();

const popupFormElement = new PopupWithForm({
    popupSelector: '.popup_type_element',
    handleFormSubmit: (data) => {        
        popupFormElement.saveLoading(true);
        api.addCard(data)      
            .then((result) => {
                renderCard(result);
                popupFormElement.popupClose();               
})
            .catch((err) => console.log(err))
            .finally(() => {
                popupFormElement.saveLoading(false)
                               
            });  
    }
    
});
popupFormElement.setEventListeners();

const popupFormLayout = new PopupWithImage('.popup_type_layout');
popupFormLayout.setEventListeners();

// ВАЛИДАТОРЫ

const popupProfileValidatior = new FormValidator(config, popupProfile);
popupProfileValidatior.enableValidation();

const popupElementValidatior = new FormValidator(config, popupElement);
popupElementValidatior.enableValidation();

const popupAvatarValidatior = new FormValidator(config, popupAvatar);
popupAvatarValidatior.enableValidation();

// ПРОФИЛЬ
const userInfo = new UserInfo(user);

const popupFormProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (inputData) => {        
        popupFormProfile.saveLoading(true);
        api.editUserInfo(inputData)
        .then ((result) => {            
            userInfo.setUserInfo(result);
            popupFormProfile.popupClose();
        })
        .catch((err) => console.log(err))
        .finally(() => {            
            popupFormProfile.saveLoading(false)               
        });     
    }
});
popupFormProfile.setEventListeners();

const popupFormAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (inputData) => {        
        popupFormAvatar.saveLoading(true);
        api.editAvatar(inputData)
        .then((result) => {
            userInfo.setUserAvatar(result);
            popupFormAvatar.popupClose();
        })
        .catch((err) => console.log(err))
        .finally(() => {
            popupFormAvatar.saveLoading(false)                      
    });
}

});
popupFormAvatar.setEventListeners();

// BUTTONS

buttonOpenProfile.addEventListener('click', function () {
    const userData = userInfo.getUserInfo();
    const inputName = popupProfile.querySelector('.popup__input_subject_name');
    const inputAbout = popupProfile.querySelector('.popup__input_subject_job');
    inputName.value = userData.name;
    inputAbout.value = userData.about;
    popupProfileValidatior.popupFormClean();
    popupFormProfile.popupOpen();
});

buttonAddElement.addEventListener('click', function () {
    popupSaveElement.reset();
    popupElementValidatior.popupFormClean();
    popupFormElement.popupOpen();
});

buttonEditAvatar.addEventListener('click', function () {
    const inputAvatar = popupAvatar.querySelector('.popup__input_subject_pic-link');
    inputAvatar.value = "";
    popupAvatarValidatior.popupFormClean();  
    popupFormAvatar.popupOpen();
  });
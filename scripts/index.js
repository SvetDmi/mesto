const popupProfile = document.querySelector('.popup_type_profile'); 
const buttonOpenProfile = document.querySelector('.profile__edit'); 
const popupSaveProfile = popupProfile.querySelector('.popup__form'); 
const inputName = popupSaveProfile.querySelector('.popup__input_subject_name'); 
const inputJob = popupSaveProfile.querySelector('.popup__input_subject_job'); 
const profileName = document.querySelector('.profile__title'); 
const profileJob = document.querySelector('.profile__text'); 

const popupElement = document.querySelector('.popup_type_element'); 
const buttonAddElement = document.querySelector('.profile__add'); 
const popupSaveElement = popupElement.querySelector('.popup__form_element'); 
const cardsList = document.querySelector('.cards__items'); 

const cardsTemplate = document.querySelector('.elements').content; 
const inputTitle = popupSaveElement.querySelector('.popup__input_subject_pic-title'); 
const inputLink = popupSaveElement.querySelector('.popup__input_subject_pic-link'); 
 
const layout = document.querySelector('.popup_type_layout'); 
const layoutTitle = layout.querySelector('.popup__title_layout'); 
const layoutImg = layout.querySelector('.popup__img'); 
 
const buttonCloseProfile = popupProfile.querySelector('.popup__close'); 
const buttonCloseElement = popupElement.querySelector('.popup__close'); 
const buttonCloselayout = layout.querySelector('.popup__close'); 


enableValidation(config);

function popupOpen(popup) { 
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseEsc);     
}

function popupClose (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseEsc);    
}

function popupFormClose(popup, config) {     
    const formElement = popup.querySelector(config.formSelector);
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
    popup.classList.remove('popup_opened');
    const buttonElement = popup.querySelector(config.buttonSelector);
    buttonElement.setAttribute('disabled', 'minus');   
    });
 }

function popupCloseEsc(evt) {
    if (evt.key === 'Escape') {
        popupFormClose(popupProfile, config);
        popupFormClose(popupElement, config);
        popupClose(layout);
    }
}

function popupCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupFormClose(popupProfile, config);
        popupFormClose(popupElement, config);
        popupClose(layout);
    }
}
 
function profileFormSubmit(evt) { 
    evt.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileJob.textContent = inputJob.value; 
    popupFormClose(popupProfile, config); 
} 
 
function elementCreate(item) { 
    const card = cardsTemplate.cloneNode(true); 
    const cardImage = card.querySelector('.elements__img');
    card.querySelector('.elements__title').textContent = item.name; 
    cardImage.src = item.link; 
    cardImage.alt = item.name; 
 
    card.querySelector('.elements__like').addEventListener('click', function (evt) { 
        evt.target.classList.toggle('elements__like_active'); 
    }); 
    card.querySelector('.elements__trash').addEventListener('click', function (evt) { 
        const element = evt.target.closest('.elements__item'); 
        element.remove(); 
    }); 
    cardImage.addEventListener('click', function() { 
        popupOpen(layout); 
        layoutTitle.textContent  = item.name; 
        layoutImg.src = item.link; 
      });  
    return card;        
      } 
 
function elementAdd(element, container) {          
    container.prepend(element);     
        } 

cards.forEach(function (item) { 
    const card = elementCreate(item); 
    elementAdd(card, cardsList); 
    }); 
 
function elementFormSubmit(evt) { 
    evt.preventDefault(); 
    const name = inputTitle.value; 
    const link = inputLink.value; 
    const card = elementCreate({name, link});     
    popupFormClose(popupElement, config); 
    elementAdd(card, cardsList); 
} 
 
    buttonAddElement.addEventListener('click', function () { 
        popupOpen(popupElement);  
            inputTitle.value = ''; 
            inputLink.value = '';                        
        }) 
         
    popupSaveElement.addEventListener('submit', elementFormSubmit); 
 
    buttonCloseElement.addEventListener('click', function () { 
        popupFormClose(popupElement, config); 
        
    }) 

    buttonCloselayout.addEventListener('click', function () { 
        popupClose(layout); 
    }) 

    buttonOpenProfile.addEventListener('click', function () { 
        popupOpen(popupProfile);     
            inputName.value = profileName.textContent; 
            inputJob.value = profileJob.textContent;         
    }); 
 
    popupSaveProfile.addEventListener('submit', profileFormSubmit); 
 
    buttonCloseProfile.addEventListener('click', function () { 
        popupFormClose(popupProfile, config);
    }); 

    popupProfile.addEventListener('click', popupCloseOverlay);
    popupElement.addEventListener('click', popupCloseOverlay);
    layout.addEventListener('click', popupCloseOverlay);

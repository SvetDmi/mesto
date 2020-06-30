let popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
let buttonOpenProfile = document.querySelector('.profile__edit');
let buttonCloseProfile = popupProfile.querySelector('.popup__close');
let popupSaveProfile = popupProfile.querySelector('.popup__form');
let inputName = popupSaveProfile.querySelector('.popup__input_subject_name');
let inputJob = popupSaveProfile.querySelector('.popup__input_subject_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');


function popupToggle(popup) {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupToggle(popupProfile);
}

buttonOpenProfile.addEventListener('click', function () {
    popupToggle(popupProfile);
    if (popup.classList.contains('popup_opened')) {
        inputName.value = profileName.textContent;
        inputJob.value = profileJob.textContent;
    }
})

buttonCloseProfile.addEventListener('click', function () {
    popupToggle(popupProfile);
})

popupSaveProfile.addEventListener('submit', formSubmitHandler);


const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const popupElement = document.querySelector('.popup_element');
const buttonAddElement = document.querySelector('.profile__add');
const buttonCloseElement = popupElement.querySelector('.popup__close');
const popupSaveElement = popupElement.querySelector('.popup__form_element');
const cardsList = document.querySelector('.elements__items');
const cardsTemplate = document.querySelector('.elements__template');
const inputTitle = popupSaveElement.querySelector('.popup__input_subject_pic-title');
const inputLink = popupSaveElement.querySelector('.popup__input_subject_pic-link');
const elementTitle = cardsTemplate.querySelector('.elements__title');
const elementLink = cardsTemplate.querySelector('.elements__img');


let cardEdit = null;

cards.forEach(function (item) {
    cardAdd(item);
});

function cardAdd(item) {
    const cardsTemplate = document.querySelector('.elements__template').content;
    const card = cardsTemplate.cloneNode(true);
    card.querySelector('.elements__title').textContent = item.name;
    card.querySelector('.elements__img').src = item.link;
    card.querySelector('.elements__img').alt = item.name;
    card.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });
    card.querySelector('.elements__trash').addEventListener('click', function (evt) {
        const element = evt.target.closest('.elements__item');
        element.remove();
    });

    cardsList.prepend(card);
}



function formSubmitHandler2(evt) {
    evt.preventDefault();

    let name = inputTitle.value;
    let link = inputLink.value;

    cardAdd(name, link);
    popupToggle(popupElement);
}
popupSaveElement.addEventListener('submit', formSubmitHandler2);

/*
function cardFormSubmitHandler (event) {
    event.preventDefault();      
     let name = cardFormInputTitle.value;
     let link = cardFormInputImageLink.value;

    addCards(name, link);
    popupToggle (popupNewCard);
}

cardForm.addEventListener('submit', cardFormSubmitHandler);

popupSaveElement.addEventListener('submit', evt => {
    evt.preventDefault();
    let name = event.target.querySelector('.popup__input_subject_name').value;
    let link = event.target.querySelector('.popup__input_subject_link').value;
    cardAdd(name, link);
});
*/






buttonAddElement.addEventListener('click', function () {
    popupToggle(popupElement);
})

buttonCloseElement.addEventListener('click', function () {
    popupToggle(popupElement);
})






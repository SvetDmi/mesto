

let buttonOpen = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupSave = popup.querySelector('.popup__form');
let inputName = popupSave.querySelector('.popup__input_subject_name');
let inputJob = popupSave.querySelector('.popup__input_subject_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');


function popupToggle() {
    popup.classList.toggle('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value; 
    popupToggle();
}

buttonOpen.addEventListener('click', popupToggle);
buttonClose.addEventListener('click', popupToggle);
popupSave.addEventListener('submit', formSubmitHandler);

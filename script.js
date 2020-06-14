

let buttonOpen = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = popup.querySelector('.popup__input_subject_name');
let inputJob = popup.querySelector('.popup__input_subject_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');
let buttonSave = popup.querySelector('.popup__content');

function popupOpen() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    inputName.getAttribute('value');
    inputJob.getAttribute('value');
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value; 
    popupClose()
}

buttonOpen.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
buttonSave.addEventListener('submit', formSubmitHandler);

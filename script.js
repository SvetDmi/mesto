let buttonOpen = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

function open() {
    popup.classList.add('popup_opened');
}

function close() {
    popup.classList.remove('popup_opened');
}

buttonOpen.addEventListener('click', open);
buttonClose.addEventListener('click', close);


let formElement = popup.querySelector('.popup__content');
let buttonSave = popup.querySelector('.popup__save');


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let inputName = popup.querySelector('.popup__input_subject_name');
    let inputJob = popup.querySelector('.popup__input_subject_job');
    
    inputName.getAttribute('value');
    inputJob.getAttribute('value');

    

    newName.textContent = inputName.value;
    newJob.textContent = inputJob.value;    

}

formElement.addEventListener('submit', formSubmitHandler);
buttonSave.addEventListener('click', close);




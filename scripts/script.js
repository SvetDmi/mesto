const popup = document.querySelector('.popup'); /* в код-ревью написано "Элемент нигде не используется далее. Необходимо удалить", 
я отметила "исправлено", но удалять не стала, так как видимо не было замечено, что этот элемент используется в фунцкии popupToggle
 - первая функция под константами*/
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
const cardsList = document.querySelector('.elements__items');
const cardsItem = cardsList.querySelector('.elements__item');
const cardsTemplate = document.querySelector('.elements__template').content;
const inputTitle = popupSaveElement.querySelector('.popup__input_subject_pic-title');
const inputLink = popupSaveElement.querySelector('.popup__input_subject_pic-link');

const layout = document.querySelector('.popup_type_layout');
const layoutTitle = layout.querySelector('.popup__title_layout');
const layoutImg = layout.querySelector('.popup__img');

const buttonCloseProfile = popupProfile.querySelector('.popup__close');
const buttonCloseElement = popupElement.querySelector('.popup__close');
const buttonCloselayout = layout.querySelector('.popup__close');

function popupToggle(popup) {
    popup.classList.toggle('popup_opened');
}

function profileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupToggle(popupProfile);
}

    buttonOpenProfile.addEventListener('click', function () {
        popupToggle(popupProfile);    
            inputName.value = profileName.textContent;
            inputJob.value = profileJob.textContent;
        
    })

    popupSaveProfile.addEventListener('submit', profileFormSubmit);

    buttonCloseProfile.addEventListener('click', function () {
        popupToggle(popupProfile);
    })

    cards.forEach(function (item) {
        elementAdd(item);
    });

function elementCreate(item) {
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
    card.querySelector('.elements__img').addEventListener('click', function() {
        popupToggle(layout);
        layoutTitle.textContent  = item.name;
        layoutImg.src = item.link;
      }); 
    return card;    
      }

function elementAdd(item) {
    let element = elementCreate(item);
    cardsList.prepend(element);
        }
    
function elementFormSubmit(evt) {
    evt.preventDefault();
    let name = inputTitle.value;
    let link = inputLink.value;
    elementAdd({name, link});
    popupToggle(popupElement);
}

    buttonAddElement.addEventListener('click', function () {
        popupToggle(popupElement); 
            inputTitle.value = '';
            inputLink.value = '';
        })
        
    popupSaveElement.addEventListener('submit',elementFormSubmit);

    buttonCloseElement.addEventListener('click', function () {
        popupToggle(popupElement);  
    })

    buttonCloselayout.addEventListener('click', function () {
        popupToggle(layout);
    })
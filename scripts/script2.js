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


const cardsList = document.querySelector('.elements__items');
const elementsItem = document.querySelector('.elements__item');


let cardsEdit = null;

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
/*
function cardDelete(e) {
    const card = e.target.closest('.elements__item');
    card.remove();
}


function cardLike(e) {
    const card = e.target.this('.elements__like');
    card.classList.toggle('.elements__like_active');

}

const = document.querySelector('.button elements__like');

cardLike.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('.elements__like_active');
});

function cardAddListeners(card) {
    card.querySelector('.elements__like').addEventListener('click', cardLike);
    card.querySelector('.elements__trash').addEventListener('click', cardDelete);
}*/
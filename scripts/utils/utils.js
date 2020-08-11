export function popupOpen(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', popupCloseOverlay);
    document.addEventListener('keydown', popupCloseEsc);
}

export function popupClose(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', popupCloseOverlay);
    document.removeEventListener('keydown', popupCloseEsc);
}

function popupCloseEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        popupClose(openedPopup);
    }
}

function popupCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupClose();
    }
}


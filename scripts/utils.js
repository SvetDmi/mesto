export function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseEsc);
    popup.addEventListener('click', popupCloseOverlay);
}

export function popupClose(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseEsc);
    popup.removeEventListener('click', popupCloseOverlay);
}

export function popupCloseEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        popupClose(openedPopup);
    }
}

export function popupCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupClose(evt.target);
    }
}
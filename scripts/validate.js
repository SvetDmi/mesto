const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save',
  errorInputClass: 'popup__input_error',
  errorClass: 'popup__input-error_active',
  errorButtonClass: 'popup__save_inactive'
};

// Добавление класса ошибки
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.errorInputClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
};

// Удаление класса ошибки
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.errorInputClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};


// Показ текст ошибки
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

// Проверка валидности полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//Добавление и удаление класса кнопке
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.errorButtonClass);
    buttonElement.setAttribute('disabled', 'minus');
  } else {
    buttonElement.classList.remove(config.errorButtonClass);
    buttonElement.removeAttribute('disabled', 'minus');
  }
};

//Добавление обработчиков полям
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });

  });
};

// Добавление обработчиков формам
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
    formElement.reset();
  });

};


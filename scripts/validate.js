const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`#${formInput.id}-error`);
const inputUrl = formElement.querySelector('.popup__input_subject_pic-link');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

// Слушатель события input
formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity.valid);
});

// Добавление класса ошибки
  const showInputError = (formElement, inputElement, errorMessage) => {    
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };

// Удаление класса ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };

// Показ текст ошибки
  const isValid = (formElement, inputElement) => {
    if ((!inputElement.validity.valid) || (!isUrl(inputUrl))) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const isUrl = (inputUrl) =>{
        return inputUrl.value.substring(0, 4) === 'http';
  }
    


// Проверка валидности полей
  const hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };



// Добавление и удаление класса кнопке
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save_inactive');
    buttonElement.setAttribute('disabled', 'minus');
   
    
  } else {
    buttonElement.classList.remove('popup__save_inactive');
    buttonElement.removeAttribute('disabled', 'minus');
  }
};

  //Добавление обработчиков полям
  const setEventListeners = (formSelector, inputSelector, buttonSelector) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save');
    
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
            
          isValid(formElement, inputElement);          
          toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  // Добавление обработчиков формам
    const enableValidation = (formSelector, inputSelector, buttonSelector) => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        setEventListeners( '.popup__form', '.popup__input', 'popup__save');
      });
    };
 
  // Вызов функции
  enableValidation( '.popup__form', '.popup__input', 'popup__save');
  
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: 'popup__input-error',
    buttonSelector: '.popup__save',
    errorClass: '.popup__input-error',
    errorActiveClass: '.popup__save_inactive',
    buttonInactiveClass: '.popup__save_inactive'
  });

  


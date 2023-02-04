const editButton = document.querySelector('.profile__edit-button_type_edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

// Находим форму в DOM
const formElement = popup.querySelector('.popup__container');
// Находим поля формы в DOM
const nameInput = popup.querySelector('#fullname');
const jobInput = popup.querySelector('#about');


const toggleOpenPopup = function () {
    popup.classList.toggle('popup_opened');
}

const handleEditButtonClick = function () {
    toggleOpenPopup();
}

const handleCloseButtonClick = function () {
    toggleOpenPopup();
}

const handleOverlayButtonClick = function (event) {
    console.log('handleOverlayButtonClick');
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
};

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', toggleOpenPopup);
popup.addEventListener('click', handleOverlayButtonClick);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
const handleFormSubmit = function (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
   
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    if(evt.submitter.classList.contains('popup__close-button')){
        return;
    }
    // Получите значение полей jobInput и nameInput из свойства value
    document.querySelector('.profile__title').textContent = nameInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    document.querySelector('.profile__subtitle').textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
    toggleOpenPopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 
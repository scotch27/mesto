const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

// Находим форму в DOM
const formElement = popup.querySelector('.popup__container');
// Находим поля формы в DOM
const nameInput = popup.querySelector('#fullname');
const jobInput = popup.querySelector('#about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const toggleOpenPopup = function () {
    popup.classList.toggle('popup_opened');
}

const handleEditButtonClick = function () {
    nameInput.value = profileTitle.textContent; //свойству value присвоить значение textContent
    jobInput.value = profileSubtitle.textContent;
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
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    toggleOpenPopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 
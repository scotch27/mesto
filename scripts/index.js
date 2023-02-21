const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const closeButton = popupProfile.querySelector('.popup__close-button');

// Находим форму в DOM
const formElement = popupProfile.querySelector('.popup__container');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('#fullname');
const jobInput = popupProfile.querySelector('#about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const toggleOpenPopup =  (popup) => {
    popup.classList.toggle('popup_opened');
}

const handleEditButtonClick =  () =>{
    nameInput.value = profileTitle.textContent; //свойству value присвоить значение textContent
    jobInput.value = profileSubtitle.textContent;
    toggleOpenPopup(popupProfile);
}

const handleOverlayButtonClick =  (event) =>{
    console.log('handleOverlayButtonClick');
    if (event.target === event.currentTarget) {
        toggleOpenPopup(popupProfile);
    }
};

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', () => {toggleOpenPopup(popupProfile)});
popupProfile.addEventListener('click', handleOverlayButtonClick);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
const handleFormSubmit =  (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    toggleOpenPopup(popupProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 
const addButton = document.querySelector('.profile__add-button');
const placeTemplate = document.querySelector('#place').content; 
const places = document.querySelector('.places');

const initialCards = [
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

initialCards.forEach((card) => {
    const placeCard = placeTemplate.querySelector('.places__card').cloneNode(true);
    // наполняем содержимым
    placeCard.querySelector('.places__card-picture').src = card.link;
    placeCard.querySelector('.places__card-title').textContent = card.name;

    // отображаем на странице
    places.append(placeCard); 
})








// const popup = document.querySelector('.popup');
// const closeButton = popup.querySelector('.popup__close-button');

// // Находим форму в DOM
// const formElement = popup.querySelector('.popup__container');
// // Находим поля формы в DOM
// const nameInput = popup.querySelector('#fullname');
// const jobInput = popup.querySelector('#about');
// const profileTitle = document.querySelector('.profile__title');
// const profileSubtitle = document.querySelector('.profile__subtitle');


// const toggleOpenPopup = function () {
//     popup.classList.toggle('popup_opened');
// }

const handleAddButtonClick = function () {

    // клонируем содержимое тега template
    const placeCard = placeTemplate.querySelector('.places__card').cloneNode(true);

    // наполняем содержимым
    placeCard.querySelector('.places__card-picture').src = './images/photo/karachaevsk.jpg';
    placeCard.querySelector('.places__card-title').textContent = 'Карачаевск';
    places.append(placeCard); 
}

// const handleCloseButtonClick = function () {
//     toggleOpenPopup();
// }

// const handleOverlayButtonClick = function (event) {
//     console.log('handleOverlayButtonClick');
//     if (event.target === event.currentTarget) {
//         toggleOpenPopup();
//     }
// };

addButton.addEventListener('click', handleAddButtonClick);
// closeButton.addEventListener('click', toggleOpenPopup);
// popup.addEventListener('click', handleOverlayButtonClick);



// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// const handleFormSubmit = function (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
//     // Так мы можем определить свою логику отправки.
//     // О том, как это делать, расскажем позже.
//     // Получите значение полей jobInput и nameInput из свойства value
//     // Выберите элементы, куда должны быть вставлены значения полей
//     // Вставьте новые значения с помощью textContent
//     profileTitle.textContent = nameInput.value;
//     profileSubtitle.textContent = jobInput.value;
//     toggleOpenPopup();
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit); 
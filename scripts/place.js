const addPlaceButton = document.querySelector('.profile__add-button');
const placeTemplate = document.querySelector('#place').content; 
const places = document.querySelector('.places');

const popupPlace = document.querySelector('#popup-place');
const closePlaceButton = popupPlace.querySelector('.popup__close-button');

// Находим форму в DOM
const placeForm = popupPlace.querySelector('.popup__container');
// // Находим поля формы в DOM
const placeName = placeForm.querySelector('#placeName');
const placeLink = placeForm.querySelector('#placeLink');

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

const addPlaceCard = (name, link) => {
    const placeCard = placeTemplate.querySelector('.places__card').cloneNode(true);
    // наполняем содержимым
    placeCard.querySelector('.places__card-picture').src = link;
    placeCard.querySelector('.places__card-title').textContent = name;

    placeCard.querySelector('.places__card-like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('places__card-like_active');
    })

    // отображаем на странице
    places.append(placeCard); 
}

initialCards.forEach((card) => {
    addPlaceCard(card.name, card.link);
})

const handleAddButtonClick = () => {
    placeName.value = "";
    placeLink.value = "";
    toggleOpenPopup(popupPlace);
}

const handleOverlayPopupPlaceButtonClick = (evt) => {
    if (evt.target === evt.currentTarget) {
        toggleOpenPopup(popupPlace);
    }
};

addPlaceButton.addEventListener('click', handleAddButtonClick);
closePlaceButton.addEventListener('click', function(){toggleOpenPopup(popupPlace)});
popupPlace.addEventListener('click', handleOverlayPopupPlaceButtonClick);

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
const handlePlaceFormSubmit = (evt) => {
    evt.preventDefault();     
    addPlaceCard(placeName.value, placeLink.value);
    toggleOpenPopup(popupPlace);
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
placeForm.addEventListener('submit', handlePlaceFormSubmit); 

// places__card-like
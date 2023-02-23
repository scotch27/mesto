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

const handleCloseButtonClick =  (evt) =>{
    toggleOpenPopup(evt.target.parentElement.parentElement);
};

const handleOverlayButtonClick =  (evt) =>{
    if (evt.target === evt.currentTarget) {
        toggleOpenPopup(evt.target);
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


const addPlaceButton = document.querySelector('.profile__add-button');
const placeTemplate = document.querySelector('#place').content; 
const places = document.querySelector('.places');

const popupPlace = document.querySelector('#popup-place');
const closePlaceButton = popupPlace.querySelector('.popup__close-button');

const popupImage = document.querySelector('#popup-image');
const closeImageButton = popupImage.querySelector('.popup__close-button');


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
    placeCard.querySelector('.places__card-picture').alt = name;
    placeCard.querySelector('.places__card-title').textContent = name;

    placeCard.querySelector('.places__card-like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('places__card-like_active');
    })

    placeCard.querySelector('.places__basket-button').addEventListener('click', (evt) => {
        evt.target.parentElement.remove();
    })

    placeCard.querySelector('.places__card-picture').addEventListener('click', (evt) => {
      popupImage.querySelector('.popup__picture').src = evt.target.src;
      popupImage.querySelector('.popup__picture').alt = evt.target.alt;
      popupImage.querySelector('.popup__caption').textContent = evt.target.alt;

      
      toggleOpenPopup(popupImage);
  })

    // отображаем на странице
    places.prepend(placeCard); 
}

initialCards.reverse().forEach((card) => {
    addPlaceCard(card.name, card.link);
})

const handleAddButtonClick = () => {
    placeName.value = "";
    placeLink.value = "";
    toggleOpenPopup(popupPlace);
}

addPlaceButton.addEventListener('click', handleAddButtonClick);
closePlaceButton.addEventListener('click', handleCloseButtonClick);
popupPlace.addEventListener('click', handleOverlayButtonClick);

closeImageButton.addEventListener('click', handleCloseButtonClick);
popupImage.addEventListener('click', handleOverlayButtonClick);

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
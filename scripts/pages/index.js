import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const popups = document.querySelectorAll(".popup");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-profile");

const profileForm = document.forms.profileForm;
const nameInput = profileForm.querySelector("#fullname");
const jobInput = profileForm.querySelector("#about");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");

const popupPlace = document.querySelector("#popup-place");

const placeForm = document.forms.placeForm;
const placeName = placeForm.querySelector("#placeName");
const placeLink = placeForm.querySelector("#placeLink");

// объявление функций

/*
  Функция инициализирующая cardsList с передачей в конструктор массива карточек initialCards 
    и функции renderer, которая отвечает за создание и отрисовку карточек
  После инициализаии  отрисовывает карточки.
*/
const getCardsList = () => {
  const cardsList = new Section(
    {
      items: initialCards.reverse(),
      renderer: (data) => {
        const placeCard = createCard(data);
        cardsList.addItem(placeCard);
      },
    },
    ".places"
  );

  cardsList.renderItems(); // отрисовка всех карточек
  return cardsList;
};

// const openPopup = (popup) => {
//   popup.classList.add("popup_opened");
//   // document.addEventListener("keydown", closeByEscape);
// };

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     closePopup();
//   }
// }

// const closePopup = () => {
//   const popup = document.querySelector(".popup_opened");
//   // if (popup) {
//   //   popup.classList.remove("popup_opened");
//   //   // document.removeEventListener("keydown", closeByEscape);
//   // }
// };

// const handleEditProfileButtonClick = () => {
//   myProfileForm.open();
//   // const userInfoData = userInfo.getUserInfo();
//   // nameInput.value = userInfoData.name;
//   // jobInput.value = userInfoData.about;
//   // profileFormValidator.updateStateForm();
//   // openPopup(popupProfile);
// };

// const handleFormProfileSubmit = (evt) => {
//   evt.preventDefault();
//   userInfo.setUserInfo({
//     name: nameInput.value,
//     about: jobInput.value,
//   });

//   closePopup();
// };

const handleCardClick = (name, link) => {
  popupWithImage.open(link, name);
};

const handleAddButtonClick = () => {
  placeForm.reset();
  placeFormValidator.updateStateForm();
  openPopup(popupPlace);
};

const createCard = (item) => {
  const placeCard = new Card(item, "#place", handleCardClick);
  const cardElement = placeCard.generateCard();
  return cardElement;
};

const handlePlaceFormSubmit = (evt) => {
  evt.preventDefault();
  const card = {
    name: placeName.value,
    link: placeLink.value,
  };
  const placeCard = createCard(card);
  cardsList.addItem(placeCard);
  closePopup();
};

// слушатели событий

// buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);
// profileForm.addEventListener("submit", handleFormProfileSubmit);

// buttonOpenPopupPlace.addEventListener("click", handleAddButtonClick);
// placeForm.addEventListener("submit", handlePlaceFormSubmit);

// вызовы функций

const cardsList = getCardsList();

const userInfo = new UserInfo({});

const popupWithImage = new PopupWithImage("#popup-image", {});
popupWithImage.setEventListeners();




// Создаем формы
const myProfileForm = new PopupWithForm("#popup-profile", 
({ data }) => {
  console.log(data);
  userInfo.setUserInfo({
    name: data.nameInput.value,
    about: data.jobInput.value,
  });

});

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close-button")) {
//       closePopup(popup);
//     }
//   });
// });

// Валидация Формы
const validateFormOptions = {
  submitSelector: ".form__save-button",
  inputSelector: ".form__input",
  inputSelectionSelector: ".form__field",
  inputErrorSelector: ".form__input-error",
  inputErrorClass: "form__input-error_active",
  inputTypeErrorClass: "form__input_type_error",
  disabledButtonClass: "form__save-button_inactive",
};

const profileFormValidator = new FormValidator(
  validateFormOptions,
  document.querySelector("#profileForm")
);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(
  validateFormOptions,
  document.querySelector("#placeForm")
);
placeFormValidator.enableValidation();

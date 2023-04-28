import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import "../pages/index.css";

const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");

const profileForm = document.forms.profileForm;
const nameInput = profileForm.querySelector("#fullname");
const jobInput = profileForm.querySelector("#about");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");

const placeForm = document.forms.placeForm;
const placeName = placeForm.querySelector("#placeName");
const placeLink = placeForm.querySelector("#placeLink");

// объявление функций
const handleEditProfileButtonClick = () => {
  const userInfoData = userInfo.getUserInfo();
  nameInput.value = userInfoData.name;
  jobInput.value = userInfoData.about;
  profileFormValidator.updateStateForm();
  popupProfile.open();
};

const handleAddButtonClick = () => {
  placeForm.reset();
  placeFormValidator.updateStateForm();
  popupPlace.open();
};

const handleCardClick = (name, link) => {
  popupWithImage.open(link, name);
};

const createCard = (item) => {
  const placeCard = new Card(item, "#place", handleCardClick);
  const cardElement = placeCard.generateCard();
  return cardElement;
};

// Вызовы функций/создание объектов
/*
  Инициализация cardsList с передачей в конструктор массива карточек initialCards 
    и функции renderer, которая отвечает за создание и отрисовку карточек.
*/
const cardsList = new Section(
  {
    renderer: (data) => {
      const placeCard = createCard(data);
      cardsList.addItem(placeCard);
    },
  },
  ".places"
);

/*
  Создание popupProfile 
*/
const popupProfile = new PopupWithForm("#popup-profile", (data) => {
  api
    .setUserInfo(data)
    .then((result) => {
      userInfo.setUserInfo({
        name: result.name,
        about: result.about,
        avatar: result.avatar,
      });
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  popupProfile.close();
});
popupProfile.setEventListeners();
buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);

/*
  Создание popupPlace
*/
const popupPlace = new PopupWithForm("#popup-place", () => {
  console.log("popuPlace action");
  const card = {
    name: placeName.value,
    link: placeLink.value,
  };
  const placeCard = createCard(card);
  cardsList.addItem(placeCard);
  popupPlace.close();
});
popupPlace.setEventListeners();
buttonOpenPopupPlace.addEventListener("click", handleAddButtonClick);

/*
  Создание popupWithImage
*/
const popupWithImage = new PopupWithImage("#popup-image", {});
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile__title",
  about: ".profile__subtitle",
  avatar: ".profile__image",
});

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

// Валидация формы profileForm
const profileFormValidator = new FormValidator(
  validateFormOptions,
  document.querySelector("#profileForm")
);
profileFormValidator.enableValidation();

// Валидация формы placeForm
const placeFormValidator = new FormValidator(
  validateFormOptions,
  document.querySelector("#placeForm")
);
placeFormValidator.enableValidation();

// Взаимодействие с API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "773b24e9-0eee-4683-86ca-3d3c2a4eb53a",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {
    cardsList.renderItems(result.reverse());
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

api
  .getUserInfo()
  .then((result) => {
    userInfo.setUserInfo({
      name: result.name,
      about: result.about,
      avatar: result.avatar,
    });
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

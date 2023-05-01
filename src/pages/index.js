import {
  buttonOpenPopupProfile,
  buttonOpenPopupAvatar,
  buttonOpenPopupPlace,
  validateFormOptions,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import "../pages/index.css";

// объявление функций
const handleEditProfileButtonClick = () => {
  const userInfoData = userInfo.getUserInfo();
  const inputs = [];
  inputs["fullname"] = userInfoData.name;
  inputs["about"] = userInfoData.about;
  popupProfile.setInputValues(inputs);
  formValidators["profileForm"].updateStateForm();
  popupProfile.open();
};

const handleEditAvatarButtonClick = () => {
  const userInfoData = userInfo.getUserInfo();
  const inputs = [];
  inputs["avatarLink"] = userInfoData.avatar;
  popupAvatar.setInputValues(inputs);
  formValidators["avatarForm"].updateStateForm();
  popupAvatar.open();
};

const handleAddButtonClick = () => {
  formValidators["placeForm"].updateStateForm();
  popupPlace.open();
};

const handleCardClick = (name, link) => {
  popupWithImage.open(link, name);
};

const likeCard = (card) => {
  api
    .likeCard(card.getId())
    .then((result) => {
      card.setLikes(result.likes);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
};

const dislikeCard = (card) => {
  api
    .dislikeCard(card.getId())
    .then((result) => {
      card.setLikes(result.likes);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
};

const createCard = (item) => {
  const placeCard = new Card(
    item,
    "#place",
    handleCardClick,
    () => popupPlaceDelete.open(placeCard),
    () => likeCard(placeCard),
    () => dislikeCard(placeCard),
    userInfo.getUserInfo()._id
  );
  const cardElement = placeCard.generateCard();
  return cardElement;
};

// Универсальная функция, которая принимает функцию запроса,
//экземпляр попапа и текст во время загрузки (опционально)
function handleSubmit(request, popupInstance, loadingText = "Сохранение...") {
  popupInstance.renderLoading(true, loadingText);
  request()
    .then(() => popupInstance.close())
    .catch((err) => console.error(`Ошибка: ${err}`)) // выведем ошибку в консоль
    .finally(() => popupInstance.renderLoading(false));
}

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
  function makeRequest() {
    return api
      .setUserInfo(data)
      .then((userData) => userInfo.setUserInfo(userData));
  }
  handleSubmit(makeRequest, popupProfile);
});
popupProfile.setEventListeners();
buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);

/*
  Создание popupAvatar
*/
const popupAvatar = new PopupWithForm("#popup-avatar", (data) => {
  function makeRequest() {
    return api.setAvatar(data.avatarLink).then((result) => {
      userInfo.setUserInfo(result);
    });
  }
  handleSubmit(makeRequest, popupAvatar);
});
popupAvatar.setEventListeners();
buttonOpenPopupAvatar.addEventListener("click", handleEditAvatarButtonClick);

/*
  Создание popupPlace
*/
const popupPlace = new PopupWithForm("#popup-place", (data) => {
  const card = { name: data.placeName, link: data.placeLink };
  function makeRequest() {
    return api.setCard(card).then((result) => {
      const placeCard = createCard(result);
      cardsList.addItem(placeCard);
    });
  }
  handleSubmit(makeRequest, popupPlace);
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

/*
  Создание popupPlaceDelete 
*/
const popupPlaceDelete = new PopupConfirm("#popup-place-delete", (card) => {
  function makeRequest() {
    return api.deleteCard(card.getId()).then((result) => card.delete());
  }
  handleSubmit(makeRequest, popupPlaceDelete, "Удаление...");
});

popupPlaceDelete.setEventListeners();

/*
  Валидация форм 
*/
const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name"); // получаем данные из атрибута `name` у формы
    formValidators[formName] = validator; // Объект записываем под именем формы
    validator.enableValidation();
  });
};

enableValidation(validateFormOptions);

// Взаимодействие с API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "773b24e9-0eee-4683-86ca-3d3c2a4eb53a",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

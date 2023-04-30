import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import "../pages/index.css";

const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupAvatar = document.querySelector(".profile__image");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");
const placeForm = document.forms.placeForm;
const placeName = placeForm.querySelector("#placeName");
const placeLink = placeForm.querySelector("#placeLink");

// объявление функций
const handleEditProfileButtonClick = () => {
  const userInfoData = userInfo.getUserInfo();
  let inputs = [];
  inputs["fullname"] = userInfoData.name;
  inputs["about"] = userInfoData.about;
  popupProfile.setInputValues(inputs);
  profileFormValidator.updateStateForm();
  popupProfile.open();
};

const handleEditAvatarButtonClick = () => {
  const userInfoData = userInfo.getUserInfo();
  let inputs = [];
  inputs["avatarLink"] = userInfoData.avatar;
  popupAvatar.setInputValues(inputs);
  avatarFormValidator.updateStateForm();
  popupAvatar.open();
};

const handleAddButtonClick = () => {
  placeForm.reset();
  placeFormValidator.updateStateForm();
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
    userInfo.getUserInfo().id
  );
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
  popupProfile.renderLoading(true, "Сохранение...");
  api
    .setUserInfo(data)
    .then((result) => {
      userInfo.setUserInfo({
        name: result.name,
        about: result.about,
      });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>{
      popupProfile.renderLoading(false);
    });
});
popupProfile.setEventListeners();
buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);

/*
  Создание popupAvatar
*/
const popupAvatar = new PopupWithForm("#popup-avatar", (data) => {
  popupAvatar.renderLoading(true, "Сохранение...");
  api
    .setAvatar(data.avatarLink)
    .then((result) => {
      userInfo.setUserInfo({
        avatar: result.avatar,
      });
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>{
      popupAvatar.renderLoading(false);
    });
});
popupAvatar.setEventListeners();
buttonOpenPopupAvatar.addEventListener("click", handleEditAvatarButtonClick);

/*
  Создание popupPlace
*/
const popupPlace = new PopupWithForm("#popup-place", () => {
  popupPlace.renderLoading(true, "Сохранение...");
  const card = { name: placeName.value, link: placeLink.value };
  api
    .setCard(card)
    .then((result) => {
      const placeCard = createCard(result);
      cardsList.addItem(placeCard);
      popupPlace.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>{
      popupPlace.renderLoading(false);
    });
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
  popupPlaceDelete.renderLoading(true, "Удаление...");
  api
    .deleteCard(card.getId())
    .then((result) => {
      card.delete();
      popupPlaceDelete.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>{
      popupPlaceDelete.renderLoading(false);
    });
});
popupPlaceDelete.setEventListeners();

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

// Валидация формы avatarFormValidator
const avatarFormValidator = new FormValidator(
  validateFormOptions,
  document.querySelector("#avatarForm")
);
avatarFormValidator.enableValidation();

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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      id: userData._id,
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });

    cardsList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

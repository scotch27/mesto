import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");

const profileForm = document.forms.profileForm;
const nameInput = profileForm.querySelector("#fullname");
const jobInput = profileForm.querySelector("#about");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");

// const popupPlace = document.querySelector("#popup-place");

const placeForm = document.forms.placeForm;
const placeName = placeForm.querySelector("#placeName");
const placeLink = placeForm.querySelector("#placeLink");



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


// объявление функций

/*
  Функция инициализирующая cardsList с передачей в конструктор массива карточек initialCards 
    и функции renderer, которая отвечает за создание и отрисовку карточек
  После инициализаии  отрисовывает карточки.
*/
const createCardsList = () => {
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
  cardsList.renderItems();
  return cardsList;
};

/*
  Функция для создания popupProfile 
*/
const createPopupProfile = () => {
  const handleEditProfileButtonClick = () => {
    const userInfoData = userInfo.getUserInfo();
    nameInput.value = userInfoData.name;
    jobInput.value = userInfoData.about;
    profileFormValidator.updateStateForm();
    popupProfile.open();
  };
  const popupProfile = new PopupWithForm("#popup-profile", (data) => {
    userInfo.setUserInfo({
      name: data.fullname,
      about: data.about,
    });
    popupProfile.close();
  });
  popupProfile.setEventListeners();
  buttonOpenPopupProfile.addEventListener(
    "click",
    handleEditProfileButtonClick
  );

  // Валидация формы profileForm
  const profileFormValidator = new FormValidator(
    validateFormOptions,
    document.querySelector("#profileForm")
  );
  profileFormValidator.enableValidation();

  return popupProfile;
};

/*
  Функция для создания popupPlace
*/
const createPopupPlace = () => {
  const handleAddButtonClick = () => {
    placeForm.reset();
    placeFormValidator.updateStateForm();
    popupPlace.open();
  };
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

  // Валидация формы placeForm
  const placeFormValidator = new FormValidator(
    validateFormOptions,
    document.querySelector("#placeForm")
  );
  placeFormValidator.enableValidation();

  return popupPlace;
};

/*
  Функция для создания popupWithImage
*/
const createPopupWithImage = () => {
  const popupWithImage = new PopupWithImage("#popup-image", {});
  popupWithImage.setEventListeners();
  return popupWithImage;
};

const handleCardClick = (name, link) => {
  popupWithImage.open(link, name);
};

const createCard = (item) => {
  const placeCard = new Card(item, "#place", handleCardClick);
  const cardElement = placeCard.generateCard();
  return cardElement;
};


// вызовы функций
const cardsList = createCardsList();
const userInfo = new UserInfo({});
const popupWithImage = createPopupWithImage();
const popupProfile = createPopupProfile();
const popupPlace = createPopupPlace();
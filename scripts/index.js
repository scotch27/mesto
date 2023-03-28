import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popups = document.querySelectorAll(".popup");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-profile");

const profileForm = document.forms.profileForm;
const nameInput = profileForm.querySelector("#fullname");
const jobInput = profileForm.querySelector("#about");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");

const places = document.querySelector(".places");
const popupPlace = document.querySelector("#popup-place");
const popupImage = document.querySelector("#popup-image");
const popupImagePicture = popupImage.querySelector(".popup__picture");
const popupImageCaption = popupImage.querySelector(".popup__caption");

const placeForm = document.forms.placeForm;
const placeName = placeForm.querySelector("#placeName");
const placeLink = placeForm.querySelector("#placeLink");

// объявление функций

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
};

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

const closePopup = () => {
  const popup = document.querySelector(".popup_opened");
  if (popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
  }
};

const handleEditProfileButtonClick = () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  profileFormValidator.updateStateForm();
  openPopup(popupProfile);
};

const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
};

const handleCardClick = (name, link) => {
  popupImagePicture.src = link;
  popupImagePicture.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupImage);
};

const prependPlaceCard = (placeCard) => {
  places.prepend(placeCard);
};

const appendPlaceCard = (placeCard) => {
  places.append(placeCard);
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
  prependPlaceCard(placeCard);
  closePopup();
};

// слушатели событий

buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);
profileForm.addEventListener("submit", handleFormProfileSubmit);

buttonOpenPopupPlace.addEventListener("click", handleAddButtonClick);
placeForm.addEventListener("submit", handlePlaceFormSubmit);

// вызовы функций

initialCards.forEach((card) => {
  const placeCard = createCard(card);
  appendPlaceCard(placeCard);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
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

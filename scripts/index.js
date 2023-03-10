const closeButtons = document.querySelectorAll(".popup__close-button");

const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-profile");

const profileForm = document.forms.profileForm;
const nameInput = profileForm.querySelector("#fullname");
const jobInput = profileForm.querySelector("#about");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const buttonOpenPopupPlace = document.querySelector(".profile__add-button");
const placeTemplate = document.querySelector("#place").content;
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
};

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
  updateStateForm(profileForm, validateFormOptions);
  openPopup(popupProfile);
};

const handleOverlayButtonClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};

const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
};

const createPlaceCard = (name, link) => {
  const placeCard = placeTemplate
    .querySelector(".places__card")
    .cloneNode(true);
  const placeCardPicture = placeCard.querySelector(".places__card-picture");
  const placeCardTitle = placeCard.querySelector(".places__card-title");
  const placeCardLike = placeCard.querySelector(".places__card-like");
  const placeCardBasket = placeCard.querySelector(".places__basket-button");

  placeCardPicture.src = link;
  placeCardPicture.alt = name;
  placeCardTitle.textContent = name;

  placeCardLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("places__card-like_active");
  });

  placeCardBasket.addEventListener("click", (evt) => {
    evt.target.closest(".places__card").remove();
  });

  placeCardPicture.addEventListener("click", (evt) => {
    popupImagePicture.src = link;
    popupImagePicture.alt = name;
    popupImageCaption.textContent = name;
    openPopup(popupImage);
  });

  return placeCard;
};

const prependPlaceCard = (placeCard) => {
  places.prepend(placeCard);
};

const appendPlaceCard = (placeCard) => {
  places.append(placeCard);
};

const handleAddButtonClick = () => {
  placeForm.reset();
  updateStateForm(placeForm, validateFormOptions);
  openPopup(popupPlace);
};

const handlePlaceFormSubmit = (evt) => {
  evt.preventDefault();
  const placeCard = createPlaceCard(placeName.value, placeLink.value);
  prependPlaceCard(placeCard);
  closePopup();
};

// слушатели событий

buttonOpenPopupProfile.addEventListener("click", handleEditProfileButtonClick);

popupProfile.addEventListener("click", handleOverlayButtonClick);

closeButtons.forEach((element) => {
  element.addEventListener("click", closePopup);
});

profileForm.addEventListener("submit", handleFormProfileSubmit);

buttonOpenPopupPlace.addEventListener("click", handleAddButtonClick);
popupPlace.addEventListener("click", handleOverlayButtonClick);

popupImage.addEventListener("click", handleOverlayButtonClick);

placeForm.addEventListener("submit", handlePlaceFormSubmit);

// вызовы функций

initialCards.forEach((card) => {
  const placeCard = createPlaceCard(card.name, card.link);
  appendPlaceCard(placeCard);
});

// Валидация Формы
const validateFormOptions = {
  formSelector: ".form",
  submitSelector: ".form__save-button",
  inputSelector: ".form__input",
  inputSelectionSelector: ".form__field",
  inputErrorSelector: ".form__input-error",
  inputErrorClass: "form__input-error_active",
  inputTypeErrorClass: "form__input_type_error",
  disabledButtonClass: "form__save-button_inactive",
};

enableValidation(validateFormOptions);

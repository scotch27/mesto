export const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
export const buttonOpenPopupAvatar = document.querySelector(".profile__image");

export const buttonOpenPopupPlace = document.querySelector(".profile__add-button");
export const placeForm = document.forms.placeForm;
export const placeName = placeForm.querySelector("#placeName");
export const placeLink = placeForm.querySelector("#placeLink");

// Валидация Формы
export const validateFormOptions = {
    submitSelector: ".form__save-button",
    inputSelector: ".form__input",
    inputSelectionSelector: ".form__field",
    inputErrorSelector: ".form__input-error",
    inputErrorClass: "form__input-error_active",
    inputTypeErrorClass: "form__input_type_error",
    disabledButtonClass: "form__save-button_inactive",
  };
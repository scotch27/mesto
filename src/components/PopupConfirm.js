import Popup from "./Popup.js";

class PopupConfirm extends Popup {
  constructor(popupSelector, submitAction) {
    super(popupSelector);
    this._submitAction = submitAction;
    this._form = this._popupElement.querySelector(".form");
    this._submitButton = this._form.querySelector(".form__save-button");
    this._submitButtonText = this._submitButton.textContent;
  }

  open(card) {
    this._card = card;
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
        this._submitAction(this._card);
    });
  }

  renderLoading(isLoading, text) {
      if (isLoading) {
          this._submitButton.textContent = text;
      } else {
          this._submitButton.textContent = this._submitButtonText;
      }
  }
}

export default PopupConfirm;

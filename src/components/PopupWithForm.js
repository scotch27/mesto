/*
Класс PopupWithForm, наследует от Popup. Этот класс:
    Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    Перезаписывает родительский метод setEventListeners. 
    Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
    но и добавлять обработчик сабмита формы.
    Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
*/
import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitAction) {
    super(popupSelector);
    this._submitAction = submitAction;
    this._form = this._popupElement.querySelector(".form");
    this._submitButton = this._form.querySelector(".form__save-button");
    this._submitButtonText = this._submitButton.textContent;
    this._inputList = this._popupElement.querySelectorAll(".form__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitAction(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading, text) {
      if (isLoading) {
          this._submitButton.textContent = text;
      } else {
          this._submitButton.textContent = this._submitButtonText;
      }
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._formValues = [];
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}

export default PopupWithForm;

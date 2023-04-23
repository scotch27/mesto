/*
Класс PopupWithForm, наследует от Popup. Этот класс:
    Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    Перезаписывает родительский метод setEventListeners. 
    Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
    но и добавлять обработчик сабмита формы.
    Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
*/
import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, { submitAction }) {
    super(popupSelector);
    this._submitAction = submitAction;
    this._form = this._selector.querySelector('.form');
  }

  _getInputValues() {
    this._inputList = this._selector.querySelectorAll(".form__input");
    this._formValues = [];
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._selector.addEventListener("submit", (ev) => {
      ev.preventDefault();
      this._submitAction(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
}
}

export default PopupWithForm;

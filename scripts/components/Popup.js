/*
класс Popup: отвечает за открытие и закрытие попапа.
Этот класс:
    Принимает в конструктор единственный параметр — селектор попапа.
    Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
    Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
    Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
    Модальное окно также закрывается при клике на затемнённую область вокруг формы.
*/
class Popup {
  constructor(popupSelector) {
    this._selector = document.querySelector(popupSelector);
  }

  open() {
    this._selector.classList.add("popup_opened");
    document.addEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  close() {
    this._selector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closePop = this._selector.querySelector(".popup__close-button");
    closePop.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;

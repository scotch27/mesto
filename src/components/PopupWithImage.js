/*
класс PopupWithImage наследует от Popup. 
Этот класс должен перезаписывать родительский метод open. 
В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
*/
import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(
    popupSelector,
    { image = ".popup__picture", description = ".popup__caption" }
  ) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(image);
    this._description = this._popupElement.querySelector(description);
  }

  open(image, description) {
    super.open();
    this._image.src = image;
    this._image.alt = description;
    this._description.textContent = description;
  }
}

export default PopupWithImage;

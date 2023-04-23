/*
класс PopupWithImage наследует от Popup. 
Этот класс должен перезаписывать родительский метод open. 
В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
*/
import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector, { image, description }) {
    super(popupSelector);
    this._image = this._selector.querySelector(image);
    this._description = this._selector.querySelector(description);
  }

  open(image, description) {
    super.open();
    this._image.src = image;
    this._description.textContent = description;
    this._image.alt = description;
  }
}

export default PopupWithImage;

class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".places__card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._placeCardLike.addEventListener("click", (evt) => {
      evt.target.classList.toggle("places__card-like_active");
    });

    this._placeCardBasket.addEventListener("click", (evt) => {
      evt.target.closest(".places__card").remove();
    });

    this._placeCardPicture.addEventListener("click", (evt) => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placeCardPicture = this._element.querySelector(
      ".places__card-picture"
    );
    this._placeCardTitle = this._element.querySelector(".places__card-title");
    this._placeCardLike = this._element.querySelector(".places__card-like");
    this._placeCardBasket = this._element.querySelector(
      ".places__basket-button"
    );

    this._setEventListeners(); // добавим обработчики

    this._placeCardPicture.src = this._link;
    this._placeCardPicture.alt = this._name;
    this._placeCardTitle.textContent = this._name;

    return this._element;
  }
}

export default Card;

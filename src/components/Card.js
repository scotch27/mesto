class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
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

  _toggleLike(evt) {
    evt.target.classList.toggle("places__card-like_active");
  }

  _deleteCard(evt) {
    evt.target.closest(".places__card").remove();
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._placeCardLike.addEventListener("click", (evt) =>
      this._toggleLike(evt)
    );

    this._placeCardBasket.addEventListener("click", (evt) =>
      this._deleteCard(evt)
    );

    this._placeCardPicture.addEventListener("click", () =>
      this._handleImageClick()
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placeCardPicture = this._element.querySelector(
      ".places__card-picture"
    );
    this._placeCardTitle = this._element.querySelector(".places__card-title");
    this._placeCardLike = this._element.querySelector(".places__card-like");
    this._placeCardLikes = this._element.querySelector(".places__card-likes");
    this._placeCardBasket = this._element.querySelector(
      ".places__basket-button"
    );

    this._setEventListeners(); // добавим обработчики

    this._placeCardPicture.src = this._link;
    this._placeCardPicture.alt = this._name;
    this._placeCardTitle.textContent = this._name;
    this._placeCardLikes.textContent = this._likes.length;
    return this._element;
  }
}

export default Card;

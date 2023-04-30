class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    deleteAction,
    likeAction,
    dislikeAction,
    userId
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._deleteAction = deleteAction;
    this._likeAction = likeAction;
    this._dislikeAction = dislikeAction;
  }

  getId() {
    return this._id;
  }

  delete() {
    this._element.remove();
    this._element = null;
  }

  setLikes(likes) {
    this._likes = likes;
    this._isHaveMyLike() ? this._like() : this._dislike();
    this._placeCardLikes.textContent = this._likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placeCardPicture = this._element.querySelector(
      ".places__card-picture"
    );
    this._placeCardTitle = this._element.querySelector(".places__card-title");
    this._placeCardLike = this._element.querySelector(".places__card-like");
    this._placeCardLikes = this._element.querySelector(".places__card-likes");
    this._placeCardBasket = this._element.querySelector(".places__basket-button");

    if (!this._isOwner()) this._placeCardBasket.remove();
    if (this._isHaveMyLike()) this._like();
    this._setEventListeners(); // добавим обработчики

    this._placeCardPicture.src = this._link;
    this._placeCardPicture.alt = this._name;
    this._placeCardTitle.textContent = this._name;
    this._placeCardLikes.textContent = this._likes.length;
    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".places__card")
      .cloneNode(true);
    return cardElement;
  }

  _toggleLike(evt) {
    this._isHaveMyLike() ? this._dislikeAction(this) : this._likeAction(this);
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._placeCardLike.addEventListener("click", (evt) =>
      this._toggleLike(evt)
    );

    this._placeCardBasket.addEventListener("click", () => this._deleteAction());
    this._placeCardPicture.addEventListener("click", () =>
      this._handleImageClick()
    );
  }

  _isOwner() {
    return this._ownerId === this._userId;
  }

  _isHaveMyLike() {
    return this._likes.some((item) => item._id === this._userId);
  }

  _like() {
    this._placeCardLike.classList.add("places__card-like_active");
  }

  _dislike() {
    this._placeCardLike.classList.remove("places__card-like_active");
  }
}

export default Card;

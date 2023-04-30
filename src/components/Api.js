class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return this._request(`/cards`, { headers: this._headers });
  }

  setCard(data) {
    return this._request(`/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  likeCard(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  dislikeCard(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request(`/users/me`, { headers: this._headers });
  }

  setUserInfo(userInfo) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.fullname,
        about: userInfo.about,
      }),
    });
  }

  setAvatar(avatarLink) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    });
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._handleResponse);
  }
}

export default Api;

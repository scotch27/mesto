/*
класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
    Принимает в конструктор объект с селекторами двух элементов: 
        элемент имени пользователя
        элемент информации о себе.
    Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
    Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
*/

class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._about.textContent = about;

    if (avatar) this._avatar.src = avatar;
    this._avatar.alt = name;
  }
}

export default UserInfo;

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
  constructor({ name = ".profile__title", about = ".profile__subtitle" }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}

export default UserInfo;

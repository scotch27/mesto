/*
Класс Section:
- конструктор
    Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. 
        Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. 
        Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
    Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
- публичный метод renderer, который отвечает за отрисовку всех элементов
    Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
- публичный метод addItem
    Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.
*/

class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
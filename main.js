(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__image"),n=document.querySelector(".profile__add-button");function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=e._id,this._name=e.name,this._link=e.link,this._likes=e.likes,this._userId=a,this._ownerId=e.owner._id,this._templateSelector=n,this._handleCardClick=r,this._deleteAction=o,this._likeAction=i,this._dislikeAction=u}var e,n;return e=t,(n=[{key:"getId",value:function(){return this._id}},{key:"delete",value:function(){this._element.remove(),this._element=null}},{key:"setLikes",value:function(t){this._likes=t,this._isHaveMyLike()?this._like():this._dislike(),this._placeCardLikes.textContent=this._likes.length}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._placeCardPicture=this._element.querySelector(".places__card-picture"),this._placeCardTitle=this._element.querySelector(".places__card-title"),this._placeCardLike=this._element.querySelector(".places__card-like"),this._placeCardLikes=this._element.querySelector(".places__card-likes"),this._placeCardBasket=this._element.querySelector(".places__basket-button"),this._isOwner()||this._placeCardBasket.remove(),this._isHaveMyLike()&&this._like(),this._setEventListeners(),this._placeCardPicture.src=this._link,this._placeCardPicture.alt=this._name,this._placeCardTitle.textContent=this._name,this._placeCardLikes.textContent=this._likes.length,this._element}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".places__card").cloneNode(!0)}},{key:"_toggleLike",value:function(t){this._isHaveMyLike()?this._dislikeAction(this):this._likeAction(this)}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setEventListeners",value:function(){var t=this;this._placeCardLike.addEventListener("click",(function(e){return t._toggleLike(e)})),this._placeCardBasket.addEventListener("click",(function(){return t._deleteAction()})),this._placeCardPicture.addEventListener("click",(function(){return t._handleImageClick()}))}},{key:"_isOwner",value:function(){return this._ownerId===this._userId}},{key:"_isHaveMyLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_like",value:function(){this._placeCardLike.classList.add("places__card-like_active")}},{key:"_dislike",value:function(){this._placeCardLike.classList.remove("places__card-like_active")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const u=i;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}const f=function(){function t(e,n){var r=this,o=e.submitSelector,i=e.inputSelector,u=e.inputSelectionSelector,a=e.inputErrorSelector,c=e.inputErrorClass,s=e.inputTypeErrorClass,f=e.disabledButtonClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_hiddenError",(function(t,e){t.classList.remove(r._inputTypeErrorClass),e.textContent="",e.classList.remove(r._inputErrorClass)})),l(this,"_showError",(function(t,e){t.classList.add(r._inputTypeErrorClass),e.textContent=t.validationMessage,e.classList.add(r._inputErrorClass)})),l(this,"_enableButton",(function(){r._submitElement.removeAttribute("disabled"),r._submitElement.classList.remove(r._disabledButtonClass)})),l(this,"_disableButton",(function(){r._submitElement.setAttribute("disabled",!0),r._submitElement.classList.add(r._disabledButtonClass)})),l(this,"_toggleInputState",(function(t){var e=t.validity.valid,n=t.closest(r._inputSelectionSelector).querySelector(r._inputErrorSelector);e?r._hiddenError(t,n):r._showError(t,n)})),l(this,"_toggleButtonState",(function(){r._inputElements.every((function(t){return t.validity.valid}))?r._enableButton():r._disableButton()})),l(this,"_setEventListeners",(function(){r._inputElements.forEach((function(t){t.addEventListener("input",(function(){r._toggleInputState(t),r._toggleButtonState()}))})),r._toggleButtonState()})),l(this,"updateStateForm",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];r._inputElements.forEach((function(e){if(t)r._toggleInputState(e);else{var n=e.closest(r._inputSelectionSelector).querySelector(r._inputErrorSelector);r._hiddenError(e,n)}})),r._toggleButtonState()})),this._submitSelector=o,this._inputSelector=i,this._inputSelectionSelector=u,this._inputErrorSelector=a,this._inputErrorClass=c,this._inputTypeErrorClass=s,this._disabledButtonClass=f,this._submitElement=n.querySelector(this._submitSelector),this._inputElements=Array.from(n.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}const d=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}const v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}const E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitAction=e,n._form=n._popupElement.querySelector(".form"),n._submitButton=n._form.querySelector(".form__save-button"),n._submitButtonText=n._submitButton.textContent,n._inputList=n._popupElement.querySelectorAll(".form__input"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;g(k(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(e){e.preventDefault(),t._submitAction(t._getInputValues())}))}},{key:"close",value:function(){g(k(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t,e){this._submitButton.textContent=t?e:this._submitButtonText}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._formValues=[],this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitAction=e,n._form=n._popupElement.querySelector(".form"),n._submitButton=n._form.querySelector(".form__save-button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"open",value:function(t){O(P(u.prototype),"open",this).call(this),this._card=t}},{key:"setEventListeners",value:function(){var t=this;O(P(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(e){e.preventDefault(),t._submitAction(t._card)}))}},{key:"renderLoading",value:function(t,e){this._submitButton.textContent=t?e:this._submitButtonText}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}const A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.image,o=void 0===r?".popup__picture":r,a=e.description,c=void 0===a?".popup__caption":a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._image=n._popupElement.querySelector(o),n._description=n._popupElement.querySelector(c),n}return e=u,(n=[{key:"open",value:function(t,e){q(R(u.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._description.textContent=e}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}const D=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{_id:this._id,name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t._id,n=t.name,r=t.about,o=t.avatar;e&&(this._id=e),n&&(this._name.textContent=n,this._avatar.alt=n),r&&(this._about.textContent=r),o&&(this._avatar.src=o)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,n=[{key:"getInitialCards",value:function(){return this._request("/cards",{headers:this._headers})}},{key:"setCard",value:function(t){return this._request("/cards",{method:"POST",headers:this._headers,body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return this._request("/cards/".concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._request("/cards/".concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislikeCard",value:function(t){return this._request("/cards/".concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("/users/me",{headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._request("/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.fullname,about:t.about})})}},{key:"setAvatar",value:function(t){return this._request("/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})})}},{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch("".concat(this._baseUrl).concat(t),e).then(this._handleResponse)}}],n&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const M=H;function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J=function(t,e){W.open(e,t)},z=function(t){var e=new u(t,"#place",J,(function(){return Y.open(e)}),(function(){return t=e,void et.likeCard(t.getId()).then((function(e){t.setLikes(e.likes)})).catch((function(t){console.log(t)}));var t}),(function(){return t=e,void et.dislikeCard(t.getId()).then((function(e){t.setLikes(e.likes)})).catch((function(t){console.log(t)}));var t}),X.getUserInfo()._id);return e.generateCard()},$=new d({renderer:function(t){var e=z(t);$.addItem(e)}},".places"),G=new E("#popup-profile",(function(t){G.renderLoading(!0,"Сохранение..."),et.setUserInfo(t).then((function(t){X.setUserInfo({name:t.name,about:t.about}),G.close()})).catch((function(t){console.log(t)})).finally((function(){G.renderLoading(!1)}))}));G.setEventListeners(),t.addEventListener("click",(function(){var t=X.getUserInfo(),e=[];e.fullname=t.name,e.about=t.about,G.setInputValues(e),tt.profileForm.updateStateForm(),G.open()}));var K=new E("#popup-avatar",(function(t){K.renderLoading(!0,"Сохранение..."),et.setAvatar(t.avatarLink).then((function(t){X.setUserInfo({avatar:t.avatar}),K.close()})).catch((function(t){console.log(t)})).finally((function(){K.renderLoading(!1)}))}));K.setEventListeners(),e.addEventListener("click",(function(){var t=X.getUserInfo(),e=[];e.avatarLink=t.avatar,K.setInputValues(e),tt.avatarForm.updateStateForm(),K.open()}));var Q=new E("#popup-place",(function(t){Q.renderLoading(!0,"Сохранение...");var e={name:t.placeName,link:t.placeLink};et.setCard(e).then((function(t){var e=z(t);$.addItem(e),Q.close()})).catch((function(t){console.log(t)})).finally((function(){Q.renderLoading(!1)}))}));Q.setEventListeners(),n.addEventListener("click",(function(){tt.placeForm.updateStateForm(),Q.open()}));var W=new A("#popup-image",{});W.setEventListeners();var X=new D({name:".profile__title",about:".profile__subtitle",avatar:".profile__image"}),Y=new L("#popup-place-delete",(function(t){Y.renderLoading(!0,"Удаление..."),et.deleteCard(t.getId()).then((function(e){t.delete(),Y.close()})).catch((function(t){console.log(t)})).finally((function(){Y.renderLoading(!1)}))}));Y.setEventListeners();var Z,tt={};Z={formSelector:".form",submitSelector:".form__save-button",inputSelector:".form__input",inputSelectionSelector:".form__field",inputErrorSelector:".form__input-error",inputErrorClass:"form__input-error_active",inputTypeErrorClass:"form__input_type_error",disabledButtonClass:"form__save-button_inactive"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(t){var e=new f(Z,t),n=t.getAttribute("name");tt[n]=e,e.enableValidation()}));var et=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"773b24e9-0eee-4683-86ca-3d3c2a4eb53a","Content-Type":"application/json"}});Promise.all([et.getUserInfo(),et.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo({_id:o._id,name:o.name,about:o.about,avatar:o.avatar}),$.renderItems(i.reverse())})).catch((function(t){console.log(t)}))})();
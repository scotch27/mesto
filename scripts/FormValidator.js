class FormValidator {
  constructor(
    {
      submitSelector,
      inputSelector,
      inputSelectionSelector,
      inputErrorSelector,
      inputErrorClass,
      inputTypeErrorClass,
      disabledButtonClass,
    },
    elementFormValidate
  ) {
    this._submitSelector = submitSelector;
    this._inputSelector = inputSelector;
    this._inputSelectionSelector = inputSelectionSelector;
    this._inputErrorSelector = inputErrorSelector;
    this._inputErrorClass = inputErrorClass;
    this._inputTypeErrorClass = inputTypeErrorClass;
    this._disabledButtonClass = disabledButtonClass;
    // this._elementFormValidate = elementFormValidate;
    this._submitElement = elementFormValidate.querySelector(this._submitSelector);
    this._inputs = Array.from(elementFormValidate.querySelectorAll(this._inputSelector));
  }

  enableValidation() {
    this._setEventListeners();
  }

  _hiddenError = (inputElement, errorElement) => {
    inputElement.classList.remove(this._inputTypeErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._inputErrorClass);
  };

  _showError = (inputElement, errorElement) => {
    inputElement.classList.add(this._inputTypeErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._inputErrorClass);
  };

  _enableButton = () => {
    this._submitElement.removeAttribute("disabled");
    this._submitElement.classList.remove(this._disabledButtonClass);
  };

  _disableButton = () => {
    this._submitElement.setAttribute("disabled", true);
    this._submitElement.classList.add(this._disabledButtonClass);
  };

  _toggleInputState = (inputElement) => {
    const isValid = inputElement.validity.valid;
    const errorElement = inputElement
      .closest(this._inputSelectionSelector)
      .querySelector(this._inputErrorSelector);
    if (isValid) {
      this._hiddenError(inputElement, errorElement);
    } else {
      this._showError(inputElement, errorElement);
    }
  };

  _toggleButtonState = ( ) => {
    const formIsValid = this._inputs.every(
      (inputElement) => inputElement.validity.valid
    );

    if (formIsValid) {
      this._enableButton( );
    } else {
      this._disableButton( );
    }
  };

  _setEventListeners = () => {
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  };

  // Обновить состояние формы
  updateStateForm = (showError = false) => {
    this._inputs.forEach((inputElement) => {
      if (showError) {
        this._toggleInputState(inputElement);
      } else {
        const errorElement = inputElement
          .closest(this._inputSelectionSelector)
          .querySelector(this._inputErrorSelector);
        this._hiddenError(inputElement, errorElement);
      }
    });
    this._toggleButtonState();
  };
}

export default FormValidator;
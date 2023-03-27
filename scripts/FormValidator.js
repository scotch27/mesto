class FormValidator {
  constructor(
    {
      formSelector,
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
    this._formSelector = formSelector;
    this._submitSelector = submitSelector;
    this._inputSelector = inputSelector;
    this._inputSelectionSelector = inputSelectionSelector;
    this._inputErrorSelector = inputErrorSelector;
    this._inputErrorClass = inputErrorClass;
    this._inputTypeErrorClass = inputTypeErrorClass;
    this._disabledButtonClass = disabledButtonClass;
    this._elementFormValidate = elementFormValidate;
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

  _enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(disabledButtonClass);
  };

  _disableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(disabledButtonClass);
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

  _toggleButtonState = (inputs, submitElement) => {
    const formIsValid = inputs.every(
      (inputElement) => inputElement.validity.valid
    );

    if (formIsValid) {
      this._enableButton(submitElement, this._disabledButtonClass);
    } else {
      this._disableButton(submitElement, this._disabledButtonClass);
    }
  };

  _setEventListeners = () => {
    const submitElement = this._elementFormValidate.querySelector(
      this._submitSelector
    );
    const inputs = Array.from(
      this._elementFormValidate.querySelectorAll(this._inputSelector)
    );

    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState(inputs, submitElement);
      });
    });
    this._toggleButtonState(inputs, submitElement);
  };

  // Обновить состояние формы
  updateStateForm = (showError = false) => {
    const submitElement = this._elementFormValidate.querySelector(this._submitSelector);
    const inputs = Array.from(this._elementFormValidate.querySelectorAll(this._inputSelector));
    inputs.forEach((inputElement) => {
      if (showError) {
        this._toggleInputState(inputElement);
      } else {
        const errorElement = inputElement
          .closest(this._inputSelectionSelector)
          .querySelector(this._inputErrorSelector);
        this._hiddenError(inputElement, errorElement);
      }
    });
    this._toggleButtonState(inputs, submitElement);
  };
}

export default FormValidator;
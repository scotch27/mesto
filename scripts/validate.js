const hiddenError = (errorElement, inputErrorClass) => {
  errorElement.textContent = "";
  errorElement.classList.remove(inputErrorClass);
};

const showError = (errorElement, message, inputErrorClass) => {
  errorElement.textContent = message;
  errorElement.classList.add(inputErrorClass);
};

const enableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(disabledButtonClass);
};

const disableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.setAttribute("disabled", "true");
  buttonElement.classList.add(disabledButtonClass);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const errorElement = inputElement
    .closest(options.inputSelectionSelector)
    .querySelector(options.inputErrorSelector);
  if (isValid) {
    hiddenError(errorElement, options.inputErrorClass);
  } else {
    showError(errorElement, inputElement.validationMessage, options.inputErrorClass);
  }
};

const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options);
    });
  });

  const toggleButtonState = (inputs, submitElement, options) => {
    const formIsValid = inputs.every(
      (inputElement) => inputElement.validity.valid
    );

    if (formIsValid) {
      enableButton(submitElement, options.disabledButtonClass);
    } else {
      disableButton(submitElement, options.disabledButtonClass);
    }
  };
  toggleButtonState(inputs, submitElement, options);
};

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach((form) => setEventListeners(form, options));
};

const options = {
  formSelector: ".form",
  submitSelector: ".form__save-button",
  inputSelector: ".form__input",
  inputSelectionSelector: '.form__field',
  inputErrorSelector: '.form__input-error',
  inputErrorClass: 'form__input-error_active',
  disabledButtonClass: 'form__save-button_inactive'
};

enableValidation(options);

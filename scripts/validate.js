const hiddenError = (inputElement, errorElement, options) => {
  inputElement.classList.remove(options.inputTypeErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(options.inputErrorClass);
};

const showError = (inputElement, errorElement, options) => {
  inputElement.classList.add(options.inputTypeErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(options.inputErrorClass);
};

const enableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(disabledButtonClass);
};

const disableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(disabledButtonClass);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const errorElement = inputElement
    .closest(options.inputSelectionSelector)
    .querySelector(options.inputErrorSelector);
  if (isValid) {
    hiddenError(inputElement, errorElement, options);
  } else {
    showError(inputElement, errorElement, options);
  }
};

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

const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options);
    });
  });
  toggleButtonState(inputs, submitElement, options);
};

// Обновить состояние формы
const updateStateForm = (form, options, showError = false) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    if (showError) {
      toggleInputState(inputElement, validateFormOptions);
    } else {
      const errorElement = inputElement
        .closest(options.inputSelectionSelector)
        .querySelector(options.inputErrorSelector);
      hiddenError(inputElement, errorElement, options);
    }
  });
  toggleButtonState(inputs, submitElement, options);
};

const enableValidation = ({
  formSelector,
  submitSelector,
  inputSelector,
  inputSelectionSelector,
  inputErrorSelector,
  inputErrorClass,
  inputTypeErrorClass,
  disabledButtonClass,
}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) =>
    setEventListeners(form, {
      formSelector,
      submitSelector,
      inputSelector,
      inputSelectionSelector,
      inputErrorSelector,
      inputErrorClass,
      inputTypeErrorClass,
      disabledButtonClass,
    })
  );
};

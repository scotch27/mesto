const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(".form"));
  forms.forEach(form => {
    setEventListeners(form); 
  });
};

const setEventListeners = (form) => {
  const submitElement = form.querySelector(".form__save-button");
  const inputs = Array.from(form.querySelectorAll(".form__input"));
  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      // console.log(inputElement.validationMessage);
      console.log("bla bla");
      const isValid = inputElement.validity.valid;
      const errorElement = inputElement
        .closest(".form__field")
        .querySelector(".form__input-error");
  
      if (isValid) {
        errorElement.textContent = "";
        errorElement.classList.remove("form__input-error_active");
      } else {
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add("form__input-error_active");
      }
      toggleButtonState(inputs, submitElement);
    });
  });
  
  const toggleButtonState = (inputs, submitElement) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);
  
    if (formIsValid) {
      console.log("formIsValid = true");
      submitElement.removeAttribute("disabled");
      submitElement.classList.remove("form__save-button_inactive");
    } else {
      console.log("formIsValid = false");
      submitElement.setAttribute("disabled", "true");
      submitElement.classList.add("form__save-button_inactive");
    }
  };
  
  toggleButtonState(inputs, submitElement);
};

enableValidation(); 


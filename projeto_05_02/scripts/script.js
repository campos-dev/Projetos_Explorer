import * as variables from "./variables.js";
import {
  calculateBMI,
  massLevel,
  closeModal,
  closeModalWithEsc,
  closeAlert,
} from "./functions.js";

variables.form.onsubmit = (event) => {
  event.preventDefault();
  const weightValue = variables.inputWeight.value;
  const heightValue = variables.inputHeight.value;

  if (
    isNaN(weightValue) ||
    isNaN(heightValue) ||
    weightValue === "" ||
    heightValue === ""
  ) {
    variables.alert_error.classList.remove("hide");
    variables.inputWeight.value = "";
    variables.inputHeight.value = "";
    return;
  }

  const BMIResult = calculateBMI(weightValue, heightValue);

  variables.modal.classList.remove("hide");

  variables.modalTextH1.innerText = `Your BMI is: ${BMIResult}`;
  variables.modalTextP.innerText = `Classification: ${massLevel(BMIResult)}`;
};

variables.closeModal.onclick = () => {
  closeModal();
};

//close modal error when type in the input
variables.inputWeight.oninput = () => closeAlert();
variables.inputHeight.oninput = () => closeAlert();

//close modal with Esc
window.addEventListener("keydown", closeModalWithEsc);

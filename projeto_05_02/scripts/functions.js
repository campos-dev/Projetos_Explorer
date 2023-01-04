import * as variables from "./variables.js";

export function calculateBMI(weight, height) {
  const bmiValue = (weight / (height / 100) ** 2).toFixed(2);
  return bmiValue;
}

export function massLevel(BMIResult) {
  if (Number(BMIResult) < 18.5) {
    return "Skinny";
  } else if (Number(BMIResult) > 18.5 && Number(BMIResult) < 24.99) {
    return "Normal";
  } else if (Number(BMIResult) > 25 && Number(BMIResult) < 29.99) {
    return "Overweight";
  } else if (Number(BMIResult) > 30 && Number(BMIResult) < 39.99) {
    return "Obesity";
  } else {
    return "Severe obesity";
  }
}

export function closeModal() {
  variables.modal.classList.add("hide");
  variables.inputWeight.value = "";
  variables.inputHeight.value = "";
}

export function closeModalWithEsc(event) {
  if (event.key == "Escape") {
    closeModal();
  }
}

export function closeAlert() {
  variables.alert_error.classList.add("hide");
}

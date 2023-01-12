import {
  minutesDisplay,
  secondsDisplay,
  playBtn,
  playBtnSecondary,
  stopBtn,
  stopBtnSecondary,
  addMinutes,
  addMinutesSecondary,
  subtractMinutes,
  subtractMinutesSecondary,
} from "./variables.js";

import {
  stopForestSound,
  stopRainSound,
  stopCoffeeShopSound,
  stopFireplaceSound,
  stopAllSounds,
  selectRandomSound,
} from "./audio.js";

let idTimerout;
let minutes = minutesDisplay.innerText;
let seconds = secondsDisplay.innerText;

function counter() {
  idTimerout = setTimeout(() => {
    if (minutesDisplay.innerText <= 0 && secondsDisplay.innerText <= 0) {
      stopForestSound();
      stopRainSound();
      stopCoffeeShopSound();
      stopFireplaceSound();
      minutesDisplay.innerText = minutes;
      toggleControlBtn(playBtnSecondary, playBtn);
      return;
    }
    if (secondsDisplay.innerText == 0) {
      secondsDisplay.innerText = "60";
      minutesDisplay.innerText = String(minutesDisplay.innerText - 1).padStart(
        2,
        "00"
      );
    }
    secondsDisplay.innerText = String(secondsDisplay.innerText - 1).padStart(
      2,
      "00"
    );

    counter();
  }, 1000);
}

function resetCounter() {
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
}

function playCounter() {
  toggleControlBtn(playBtn, playBtnSecondary);
  selectRandomSound();
  counter();
}
function stopCounter() {
  toggleControlBtn(playBtnSecondary, playBtn);
  toggleControlBtn(stopBtn, stopBtnSecondary);
  resetCounter();
  stopAllSounds();
  clearTimeout(idTimerout);
}

function addMinutesCounter() {
  toggleControlBtn(addMinutes, addMinutesSecondary);
  minutesDisplay.innerText = String(
    Number(minutesDisplay.innerText) + 1
  ).padStart(2, "00");
  minutes = minutesDisplay.innerText;
}

function subtractMinutesCounter() {
  toggleControlBtn(subtractMinutes, subtractMinutesSecondary);
  if (minutesDisplay.innerText > 0) {
    minutesDisplay.innerText = String(
      Number(minutesDisplay.innerText) - 1
    ).padStart(2, "00");
    minutes = minutesDisplay.innerText;
  }
}

function toggleControlBtn(selectedButton, switchButtonColor) {
  selectedButton.classList.add("hide");
  switchButtonColor.classList.remove("hide");
  if (
    selectedButton === stopBtn ||
    selectedButton === addMinutes ||
    selectedButton === subtractMinutes
  ) {
    setTimeout(() => {
      selectedButton.classList.remove("hide");
      switchButtonColor.classList.add("hide");
    }, 500);
  }
}

export {
  counter,
  resetCounter,
  playCounter,
  stopCounter,
  addMinutesCounter,
  subtractMinutesCounter,
  toggleControlBtn,
};

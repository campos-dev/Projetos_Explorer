import {
  bgMusicOn,
  bgMusicOff,
  alarm,
  soundOffBtn,
  soundOnBtn,
} from "./audio.js";

import {
  countDown,
  pauseCounter,
  changeInitialTimer,
  resetCounter,
} from "./controls.js";

import {
  secondsDisplay,
  minutesDisplay,
  playBtn,
  setBtn,
  pauseBtn,
  stopBtn,
} from "./variables.js";

let idTimeout;

playBtn.addEventListener("click", countDown);
setBtn.addEventListener("click", changeInitialTimer);
stopBtn.addEventListener("click", resetCounter);
pauseBtn.addEventListener("click", pauseCounter);
soundOffBtn.addEventListener("click", bgMusicOn);
soundOnBtn.addEventListener("click", bgMusicOff);

export function timer() {
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
  setBtn.classList.add("hide");
  stopBtn.classList.remove("hide");

  if (minutesDisplay.innerText == 0 && secondsDisplay.innerText == 0) {
    setTimeout(() => {
      resetCounter();
    }, 1000);
    alarm.play();
    return;
  }

  idTimeout = setTimeout(() => {
    if (secondsDisplay.innerText == 0) {
      minutesDisplay.innerText = String(minutesDisplay.innerText - 1).padStart(
        2,
        "0"
      );

      secondsDisplay.innerText = "60";
    }

    secondsDisplay.innerText = String(secondsDisplay.innerText - 1).padStart(
      2,
      "0"
    );

    timer();
  }, 1000);
}

export function idTimer() {
  return idTimeout;
}

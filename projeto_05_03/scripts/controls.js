import { clickAudio } from "./audio.js";
import { timer, idTimer } from "./index.js";
import {
  secondsDisplay,
  minutesDisplay,
  playBtn,
  setBtn,
  pauseBtn,
  stopBtn,
} from "./variables.js";

let initialSeconds = secondsDisplay.innerText;
let initialMinutes = minutesDisplay.innerText;

function pauseCounter() {
  clickAudio.play();
  clearTimeout(idTimer());
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
}

function resetCounter() {
  clickAudio.play();
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
  setBtn.classList.remove("hide");
  stopBtn.classList.add("hide");
  pauseCounter();
  minutesDisplay.innerText = initialMinutes;
  secondsDisplay.innerText = initialSeconds;
}

function countDown() {
  clickAudio.play();
  timer();
}

function changeInitialTimer() {
  clickAudio.play();
  const initialTimer = prompt("Set the minutes:");
  if (!initialTimer) {
    initialTimer = initialMinutes;
  }
  initialMinutes = String(initialTimer).padStart(2, "00");
  secondsDisplay.innerText = "00";
  minutesDisplay.innerText = initialMinutes;
}

export { countDown, changeInitialTimer, resetCounter, pauseCounter };

import {
  playBtn,
  stopBtn,
  addMinutes,
  subtractMinutes,
  forestBtn,
  rainBtn,
  coffeeShopBtn,
  fireplaceBtn,
} from "./variables.js";

import {
  playForestSound,
  playRainSound,
  playCoffeeShopSound,
  playFireplaceSound,
} from "./audio.js";

import {
  playCounter,
  stopCounter,
  addMinutesCounter,
  subtractMinutesCounter,
} from "./controls.js";

//controls.js
playBtn.addEventListener("click", playCounter);
stopBtn.addEventListener("click", stopCounter);
addMinutes.addEventListener("click", addMinutesCounter);
subtractMinutes.addEventListener("click", subtractMinutesCounter);

//audio.js
forestBtn.addEventListener("click", playForestSound);
rainBtn.addEventListener("click", playRainSound);
coffeeShopBtn.addEventListener("click", playCoffeeShopSound);
fireplaceBtn.addEventListener("click", playFireplaceSound);

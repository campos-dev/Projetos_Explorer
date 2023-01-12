import {
  playBtn,
  stopBtn,
  addMinutes,
  subtractMinutes,
  forestBtn,
  rainBtn,
  coffeeShopBtn,
  fireplaceBtn,
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFireplace,
} from "./variables.js";

import {
  playForestSound,
  playRainSound,
  playCoffeeShopSound,
  playFireplaceSound,
  audioSlideForest,
  audioSlideRain,
  audioSlideCoffeeShop,
  audioSlideFireplace,
} from "./audio.js";

import {
  playCounter,
  stopCounter,
  addMinutesCounter,
  subtractMinutesCounter,
} from "./controls.js";

import {
  toggleModeDark,
  toggleModeLight,
  toggleBtnDark,
  toggleBtnLight,
} from "./darkMode.js";

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
volumeForest.addEventListener("change", audioSlideForest);
volumeRain.addEventListener("change", audioSlideRain);
volumeCoffeeShop.addEventListener("change", audioSlideCoffeeShop);
volumeFireplace.addEventListener("change", audioSlideFireplace);

//dark mode
toggleBtnDark.addEventListener("click", toggleModeDark);
toggleBtnLight.addEventListener("click", toggleModeLight);

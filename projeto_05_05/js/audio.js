import {
  forestBtn,
  forestBtnSecondary,
  rainBtn,
  rainBtnSecondary,
  coffeeShopBtn,
  coffeeShopBtnSecondary,
  fireplaceBtn,
  fireplaceBtnSecondary,
} from "./variables.js";

import { toggleControlBtn } from "./controls.js";

const forestSound = new Audio("./audio/forest.mp3");
const rainSound = new Audio("./audio/rain.mp3");
const coffeeShopSound = new Audio("./audio/coffeeShop.mp3");
const fireplaceSound = new Audio("./audio/fire.mp3");
let soundWorks = false;

forestSound.loop = true;
rainSound.loop = true;
coffeeShopSound.loop = true;
fireplaceSound.loop = true;

function playForestSound() {
  toggleControlBtn(forestBtn, forestBtnSecondary);
  forestSound.play();
  stopRainSound();
  stopCoffeeShopSound();
  stopFireplaceSound();
  soundWorks = true;
}

function stopForestSound() {
  toggleControlBtn(forestBtnSecondary, forestBtn);
  forestSound.pause();
  soundWorks = false;
}

function playRainSound() {
  toggleControlBtn(rainBtn, rainBtnSecondary);
  rainSound.play();
  stopForestSound();
  stopCoffeeShopSound();
  stopFireplaceSound();
  soundWorks = true;
}

function stopRainSound() {
  toggleControlBtn(rainBtnSecondary, rainBtn);
  rainSound.pause();
  soundWorks = false;
}
function playCoffeeShopSound() {
  toggleControlBtn(coffeeShopBtn, coffeeShopBtnSecondary);
  coffeeShopSound.play();
  stopForestSound();
  stopRainSound();
  stopFireplaceSound();
  soundWorks = true;
}

function stopCoffeeShopSound() {
  toggleControlBtn(coffeeShopBtnSecondary, coffeeShopBtn);
  coffeeShopSound.pause();
  soundWorks = false;
}
function playFireplaceSound() {
  toggleControlBtn(fireplaceBtn, fireplaceBtnSecondary);
  fireplaceSound.play();
  stopForestSound();
  stopRainSound();
  stopCoffeeShopSound();
  soundWorks = true;
}

function stopFireplaceSound() {
  toggleControlBtn(fireplaceBtnSecondary, fireplaceBtn);
  fireplaceSound.pause();
  soundWorks = false;
}

function stopAllSounds() {
  stopForestSound();
  stopRainSound();
  stopCoffeeShopSound();
  stopFireplaceSound();
}

function selectRandomSound() {
  const list = [
    playForestSound,
    playRainSound,
    playCoffeeShopSound,
    playFireplaceSound,
  ];

  if (soundWorks == false) {
    const randomNumber = Math.floor(Math.random() * 4);
    list[randomNumber]();
  }
}

function audioSlideForest(e) {
  forestSound.volume = e.currentTarget.value / 100;
}
function audioSlideRain(e) {
  rainSound.volume = e.currentTarget.value / 100;
}
function audioSlideCoffeeShop(e) {
  coffeeShopSound.volume = e.currentTarget.value / 100;
}
function audioSlideFireplace(e) {
  fireplaceSound.volume = e.currentTarget.value / 100;
}

export {
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound,
  playForestSound,
  stopForestSound,
  playRainSound,
  stopRainSound,
  playCoffeeShopSound,
  stopCoffeeShopSound,
  playFireplaceSound,
  stopFireplaceSound,
  stopAllSounds,
  selectRandomSound,
  audioSlideForest,
  audioSlideRain,
  audioSlideCoffeeShop,
  audioSlideFireplace,
};

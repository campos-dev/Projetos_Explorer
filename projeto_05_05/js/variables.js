const minutesDisplay = document.querySelector("#minutesDisplay");
const secondsDisplay = document.querySelector("#secondsDisplay");

const playBtn = document.querySelector("#playBtn");
const playBtnSecondary = document.querySelector("#playBtnSecondary");
const stopBtn = document.querySelector("#stopBtn");
const stopBtnSecondary = document.querySelector("#stopBtnSecondary");
const addMinutes = document.querySelector("#addMinutes");
const addMinutesSecondary = document.querySelector("#addMinutesSecondary");
const subtractMinutes = document.querySelector("#subtractMinutes");
const subtractMinutesSecondary = document.querySelector(
  "#subtractMinutesSecondary"
);

const forestBtn = document.querySelector(".forestButton");
const forestBtnSecondary = document.querySelector(".forestButton.Secondary");
const rainBtn = document.querySelector(".rainButton");
const rainBtnSecondary = document.querySelector(".rainButton.Secondary");
const coffeeShopBtn = document.querySelector(".coffeeShopButton");
const coffeeShopBtnSecondary = document.querySelector(
  ".coffeeShopButton.Secondary"
);
const fireplaceBtn = document.querySelector(".fireplaceButton");
const fireplaceBtnSecondary = document.querySelector(
  ".fireplaceButton.Secondary"
);

const volumeForest = document.querySelector(
  ".forestButton.Secondary .volume-control"
);
const volumeRain = document.querySelector(
  ".rainButton.Secondary .volume-control"
);
const volumeCoffeeShop = document.querySelector(
  ".coffeeShopButton.Secondary .volume-control"
);
const volumeFireplace = document.querySelector(
  ".fireplaceButton.Secondary .volume-control"
);

export {
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
  forestBtn,
  forestBtnSecondary,
  rainBtn,
  rainBtnSecondary,
  coffeeShopBtn,
  coffeeShopBtnSecondary,
  fireplaceBtn,
  fireplaceBtnSecondary,
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFireplace,
};

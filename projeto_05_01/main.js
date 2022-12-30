const fortuneCookie = document.querySelector("#fortuneCookie");
const screen1 = document.querySelector(".bg_screen1");
const screen2 = document.querySelector(".bg_screen2");
const button = document.querySelector("button");
const fortuneText = document.querySelector(".container_screen2 p ");
let randNum;

const fortuneSentences = [
  "Don’t hold onto things that require a tight grip.",
  "I didn’t come this far to only come this far.",
  "Vulnerability sounds like faith and looks like courage.",
  "And into the forest I go, to lose my mind and find my soul.",
  "Do it scared.",
  "Look how far you've come.",
  "Sitting in silence with you is all the noise I need.",
  "Every good and perfect gift is from above.",
  "Every new beginning comes from some other beginning's end.",
  "What good are wings, without the courage to fly.",
  "Little by little, one travels far.",
  "Don't let yesterday take up too muchof today.",
  "I never dreamed about success. I worked for it.",
  "It's only after we've lost everything that we're free to do anything.",
  "Love all, trust a few, do wrong to none.",
  "One bad chapter doesn't mean your story is over.",
  "You are not what you've done. You are what you keep doing.",
  "It is never too late to be what you might have been.",
  "The road to success is always under construction.",
  "The most effective way to do it, is to do it.",
  "The worst enemy to creativity is self-doubt.",
];

function handleClick() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
  randNum = Math.floor(Math.random() * fortuneSentences.length);
  console.log(randNum);
  fortuneText.innerText = fortuneSentences[randNum];
  fortuneText.style.animation = "fadeBox 0.8s ease";
  screen2.style.animation = "changeBg 2s alternate infinite";
}

function clickButton() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
}

fortuneCookie.addEventListener("click", handleClick);
button.addEventListener("click", clickButton);

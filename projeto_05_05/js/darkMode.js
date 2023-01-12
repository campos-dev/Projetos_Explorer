const toggleBtnDark = document.querySelector(".toggleMode.dark");
const toggleBtnLight = document.querySelector(".toggleMode.light");
const darkMode = document.querySelector(".toggleModes");

function toggleModeDark() {
  toggleBtnDark.classList.add("hide");
  toggleBtnLight.classList.remove("hide");
  darkMode.classList.add("darkOn");
}

function toggleModeLight() {
  toggleBtnDark.classList.remove("hide");
  toggleBtnLight.classList.add("hide");
  darkMode.classList.remove("darkOn");
}
export {
  toggleModeDark,
  toggleModeLight,
  toggleBtnDark,
  toggleBtnLight,
  darkMode,
};

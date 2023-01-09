const soundOffBtn = document.querySelector(".soundOffBtn");
const soundOnBtn = document.querySelector(".soundOnBtn");
const clickAudio = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
);
const alarm = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
);
const bgMusic = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
);

bgMusic.loop = true;

function bgMusicOn() {
  bgMusic.play();
  soundOffBtn.classList.add("hide");
  soundOnBtn.classList.remove("hide");
}

function bgMusicOff() {
  bgMusic.pause();
  soundOffBtn.classList.remove("hide");
  soundOnBtn.classList.add("hide");
}

export { bgMusicOn, bgMusicOff, clickAudio, alarm, soundOffBtn, soundOnBtn };

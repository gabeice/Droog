import { analyze, showFrequencyOsc, showFrequencyCircle, showFrequencyMid } from './util/wave_util';
import { extractor } from './util/metadata_util';
import { toColor } from './util/color_util';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".fa-play");
  const pauseButton = document.querySelector(".fa-pause");
  const audio = document.getElementById('audio');
  const songFile = document.getElementById('song-file');

  pauseButton.style.color = "indigo";

  playButton.addEventListener("click", () => {
    if(!window.ctx) {
      analyze();
    }
    audio.play();
    playButton.style.color = "indigo";
    pauseButton.style.color = "black";
    setInterval(showFrequencyCircle, 100);
  });

  pauseButton.addEventListener("click", () => {
    audio.pause();
    playButton.style.color = "black";
    pauseButton.style.color = "indigo";
  });

  songFile.addEventListener("change", (e) => {
    const file = e.target.files[0]
    extractor(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      audio.src = e.target.result;
    }
    reader.readAsDataURL(file);
  });

  const circles = document.querySelectorAll(".color-picker");
  circles.forEach(circle => circle.addEventListener("click", (e) => {
    const color = toColor([e.offsetX, e.offsetY]);
    debugger
  }));
});

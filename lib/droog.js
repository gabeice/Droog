import { analyze, showFrequencyOsc, showFrequencyCircle, showFrequencyMid } from './util/wave_util';
import { extractor } from './util/metadata_util';
import { toColor } from './util/color_util';
import { addTypeSelectors } from './listeners/type_selector';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".fa-play");
  const pauseButton = document.querySelector(".fa-pause");
    const littleBar = document.querySelector(".little-bar");
  const audio = document.getElementById('audio');
  const songFile = document.getElementById('song-file');
  const frequencyData = analyze();

  const frequencyType = function(selection) {
    let showFrequency;

    switch(selection) {
      case "Oscilloscopic":
      showFrequency = showFrequencyOsc;
      break;
      case "Centered":
      showFrequency = showFrequencyMid;
      break;
      default:
      showFrequency = showFrequencyCircle;
    }

    return showFrequency(frequencyData);
  }


  setInterval(() => { frequencyType(document.querySelector(".selected").innerText); }, 100);

  pauseButton.style.color = "indigo";
  littleBar.style.display = "none";

  playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.color = "indigo";
    pauseButton.style.color = "black";
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

  const osc = document.getElementById("osc");
  const cent = document.getElementById("cent");
  const conc = document.getElementById("conc");

  const display = document.getElementById("display");
  const wave = document.getElementById("test-bar");

  addTypeSelectors(osc, cent, display, wave);

  const circles = document.querySelectorAll(".color-picker");
  circles.forEach(circle => circle.addEventListener("click", (e) => {
    const color = toColor([e.offsetX, e.offsetY]);
    debugger
  }));
});

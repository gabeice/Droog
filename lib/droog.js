import { analyze, showFrequencyOsc, showFrequencyCircle, showFrequencyMid } from './util/wave_util';
import { toColor } from './util/color_util';
import { addTypeSelectors } from './listeners/type_selector';
import { addColorSelectors } from './listeners/color_selector';
import { setButtons } from './listeners/play_listeners';
import { setupAudio } from './listeners/audio_listener';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".fa-play");
  const pauseButton = document.querySelector(".fa-pause");
  const audio = document.getElementById('audio');
  const songFile = document.getElementById('song-file');
  const frequencyData = analyze();

  const frequencyType = function(selection) {
    let showFrequency;

    switch(selection) {
      case "Grounded":
      showFrequency = showFrequencyOsc;
      break;
      case "Floating":
      showFrequency = showFrequencyMid;
      break;
      default:
      showFrequency = showFrequencyCircle;
    }

    return showFrequency(frequencyData);
  }

  setInterval(() => { frequencyType(document.querySelector(".selected").innerText); }, 100);

  pauseButton.style.color = "red";

  setButtons(playButton, pauseButton, audio);
  setupAudio(songFile, audio);

  const colorBarWidth = document.querySelectorAll(".red")[0].offsetWidth;

  document.getElementById("bottom-red").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*102)}px`;
  document.getElementById("bottom-green").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*51)}px`;
  document.getElementById("bottom-blue").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*153)}px`;
  document.getElementById("top-red").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*64)}px`;
  document.getElementById("top-green").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*224)}px`;
  document.getElementById("top-blue").style.marginLeft = `${colorBarWidth - Math.floor((colorBarWidth/255)*208)}px`;

  const osc = document.getElementById("osc");
  const cent = document.getElementById("cent");
  const conc = document.getElementById("conc");

  const display = document.getElementById("display");
  const wave = document.getElementById("outer-bar");

  addTypeSelectors(osc, cent, display, wave);
  addColorSelectors();
});

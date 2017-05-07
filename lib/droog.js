import {
  analyze,
  showFrequencyOsc,
  showFrequencyCircle,
  showFrequencyMid,
  frequencyType
} from './util/wave_util';

import { toColor } from './util/color_util';
import { addTypeSelectors } from './listeners/type_selector';
import { addColorSelectors } from './listeners/color_selector';
import { setButtons, addMicListener } from './listeners/play_listeners';
import { setupAudio } from './listeners/audio_listener';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".fa-play");
  const pauseButton = document.querySelector(".fa-pause");
  const audio = document.getElementById('audio');
  const songFile = document.getElementById('song-file');

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

  let ctx = new AudioContext();
  const ticker = analyze(ctx);

  const mic = document.getElementById("microphone");
  addMicListener(mic, ctx, ticker);
});

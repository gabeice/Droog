import { extractor } from './metadata_extractor';

window.onload = function() {
  const ctx = new AudioContext();
  const audio = document.getElementById('audio');
  const audioSrc = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  audioSrc.connect(ctx.destination);
  audioSrc.connect(analyser);
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  window.ctx = ctx;
  window.frequencyData = frequencyData;
  window.average = function(numArray) {
    return numArray.reduce(function(acc, val) {
      return acc + val;
    }, 0)/1024;
  }

  function renderFrame() {
     requestAnimationFrame(renderFrame);
     analyser.getByteFrequencyData(frequencyData);
  }

  // audio.play();
  renderFrame();
};

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".fa-play");
  const pauseButton = document.querySelector(".fa-pause");
  const audio = document.getElementById('audio');
  const songFile = document.getElementById('song-file');

  pauseButton.style.color = "indigo";

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
    extractor(e.target.files[0]);
  });
});

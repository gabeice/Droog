import { analyze, frequencyType } from '../util/wave_util';

export const setButtons = (play, pause, audio) => {
  play.addEventListener("click", () => {
    audio.play();
    play.style.color = "red";
    pause.style.color = "black";
  });

  pause.addEventListener("click", () => {
    audio.pause();
    play.style.color = "black";
    pause.style.color = "red";
  });
}

export const addMicListener = (mic) => {
  mic.addEventListener("click", () => {
    clearInterval(ticker);
    let micState;

    if(mic.className) {
      mic.className = "";
      mic.style.color = "black";
      micState = "off";
    } else {
      mic.className = "mic-on";
      mic.style.color = "red";
      micState = "on";
    }

    analyze(micState);
  });
}

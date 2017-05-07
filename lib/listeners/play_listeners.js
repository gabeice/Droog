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

export const addMicListener = (mic, ctx, ticker) => {
  mic.addEventListener("click", () => {
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

    const switchSetting = switchContext(ctx, micState, ticker);
    ctx = switchSetting[0];
    ticker = switchSetting[1];
  });
}

const switchContext = (ctx, micState, ticker) => {
  ctx.close();
  clearInterval(ticker);
  const context = new AudioContext();
  const newTicker = analyze(context, micState);
  return [ctx, newTicker];
}

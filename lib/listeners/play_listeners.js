export const setButtons = (play, pause, audio) => {
  play.addEventListener("click", () => {
    audio.play();
    play.style.color = "indigo";
    pause.style.color = "black";
  });

  pause.addEventListener("click", () => {
    audio.pause();
    play.style.color = "black";
    pause.style.color = "indigo";
  });
}

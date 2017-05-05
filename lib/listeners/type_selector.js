const waveStyle = (el, osc, cent, display, wave) => {
  el.addEventListener("click", (e) => {
    osc.className = "";
    cent.className = "";
    conc.className = "";

    e.target.className = "selected";

    display.setAttribute("style", "align-items: flex-end");

    wave.setAttribute("style", "justify-content: flex-end");
    wave.setAttribute("style", "align-items: flex-end");
    wave.setAttribute("style", "border-radius: 0");
    wave.setAttribute("style", "background-color: white");
    wave.setAttribute("style", "box-shadow: none");
  });
}

export const addTypeSelectors = (osc, cent, display, wave) => {
  waveStyle(osc, osc, cent, display, wave);
  waveStyle(cent, osc, cent, display, wave);

  conc.addEventListener("click", (e) => {
    osc.className = "";
    cent.className = "";
    conc.className = "selected";

    display.setAttribute("style", "align-items: center");

    wave.innerHTML = "";

    const littleBar = document.createElement("section");
    littleBar.id = "little-bar";
    wave.appendChild(littleBar);

    wave.setAttribute("style",
    "justify-content: space-around; align-items: center; border-radius: 50%; background-color: turquoise; box-shadow: inset 0 0 3em white, 0 0 2em turquoise");
  });
}

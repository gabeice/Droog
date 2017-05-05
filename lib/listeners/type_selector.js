const waveStyle = (el, osc, cent, display, wave) => {
  el.addEventListener("click", (e) => {
    osc.className = "";
    cent.className = "";
    conc.className = "";

    e.target.className = "selected";

    display.setAttribute("style", "align-items: flex-end");
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
  });
}

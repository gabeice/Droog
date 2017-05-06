export const addColorSelectors = () => {
  document.querySelectorAll('.color-mark').forEach(mark => {
    mark.draggable = true;
    mark.addEventListener("drag", (e) => {
      let offsetLeft = e.clientX-e.target.parentElement.offsetLeft;

      if(offsetLeft > 0) {
        e.target.setAttribute("style", `margin-left: ${offsetLeft}px;`);

        let field = `--${e.target.parentElement.parentElement.parentElement.id}-${e.target.parentElement.className}`;
        let newVal = 255 - Math.floor((255/e.target.parentElement.offsetWidth)*offsetLeft);

        document.getElementById("main").style.setProperty(field, newVal);
      }
    });
  });
}

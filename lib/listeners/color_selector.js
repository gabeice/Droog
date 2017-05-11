export const addColorSelectors = () => {
  document.querySelectorAll('.color-mark').forEach(mark => {
    mark.draggable = true;
    mark.addEventListener("drag", (e) => {
      let parent = e.target.parentElement
      let offsetLeft = e.clientX-parent.offsetLeft;

      if(offsetLeft > 0 && offsetLeft < parent.offsetWidth - 5) {
        e.target.setAttribute("style", `margin-left: ${offsetLeft}px;`);

        let field = `--${parent.parentElement.parentElement.id}-${parent.className}`;
        let newVal = 255 - Math.floor((255/parent.offsetWidth)*offsetLeft);

        document.getElementById("main").style.setProperty(field, newVal);
      }
    });
  });
}

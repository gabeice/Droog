export const addColorSelectors = () => {
  document.querySelectorAll('.color-mark').forEach(mark => {
    mark.draggable = true;
    mark.addEventListener("dragend", (e) => {
      if(e.offsetX > 0) {
        e.target.setAttribute("style", `margin-left: ${e.offsetX}px`);
      }
    });
  });
}

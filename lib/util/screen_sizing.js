export const fullSize = () => {
  document.getElementById("masthead").style.display = "none";
  document.getElementById("underline").style.opacity = "0";
  document.getElementById("controls").style.opacity = "0";
  document.getElementById("customizer").style.opacity = "0";
  document.getElementById("footer").style.opacity = "0";

  document.getElementById("display").setAttribute("style", "transform: scale(1.5);");
}

export const normalSize = () => {
  document.getElementById("masthead").style.display = "flex";
  document.getElementById("underline").style.opacity = "1";
  document.getElementById("controls").style.opacity = "1";
  document.getElementById("customizer").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";

  document.getElementById("display").setAttribute("style", "transform: scale(1);");
}

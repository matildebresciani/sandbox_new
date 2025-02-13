let hasLoaded = false;

window.addEventListener("DOMContentLoaded", loadBtn);
const btn = document.querySelector("button");
document.addEventListener("mousemove", movedMouse);

function loadBtn() {
  btn.addEventListener("click", btnClicked);
  btn.classList.add("animation");
  btn.addEventListener("animationend", btnLoaded);
}

function movedMouse() {
  if (!hasLoaded) {
    document.body.style.backgroundColor = "rgb(160, 195, 160)";
    btn.classList.remove("animation");
    btn.style.backgroundSize = "100% 100%";
    btn.classList.remove("hide");
  }
}

function btnClicked() {
  document.body.style.backgroundColor = "rgb(119, 172, 95)";
  btn.classList.remove("animation");
  btn.classList.add("hide");
  hasLoaded = true;
}

function btnLoaded() {
  document.body.style.backgroundColor = "rgb(119, 172, 95)";
  btn.classList.add("hide");
  hasLoaded = true;
}

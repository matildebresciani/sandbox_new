document.querySelector("#choose_theme").addEventListener("change", changeTheme);

function changeTheme() {
  //console.log(document.querySelector("#choose_theme").value);
  document.querySelector("body").dataset.theme =
    document.querySelector("#choose_theme").value;
}

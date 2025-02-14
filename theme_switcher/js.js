const theStoredTheme = localStorage.getItem("storedTheme");
if (theStoredTheme !== null) {
  document.querySelector("body").dataset.theme = theStoredTheme;
  document.querySelector("#choose_theme").value = theStoredTheme;
}

document.querySelector("#choose_theme").addEventListener("change", changeTheme);

function changeTheme(evt) {
  const chosenTheme = evt.target.value;
  document.querySelector("body").dataset.theme = chosenTheme;
  localStorage.setItem("storedTheme", chosenTheme);
}

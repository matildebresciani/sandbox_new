"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

document
  .querySelector("#choose_language")
  .addEventListener("change", languageChange);

function languageChange(evt) {
  locale = document.querySelector("#choose_language").value;
  console.log(texts[locale].texts);
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });
}

const locale = "da";

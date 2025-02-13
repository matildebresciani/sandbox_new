const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let isTextSafe = false;
let theText = document.querySelector("p").textContent;

// document.querySelector("button").addEventListener("click", filterWords);

function filterWords() {
  curseWords.forEach((word) => {
    theText = theText.replaceAll(word.bad, word.good);
  });
  console.log(theText);
  document.querySelector("p").textContent = theText;
  isTextSafe = true;
}

const dialog = document.querySelector("dialog");
const SFWButton = document.querySelector(".sfw_btn");
const closeButton = document.querySelector("dialog button");

SFWButton.addEventListener("click", () => {
  if (isTextSafe) {
    dialog.showModal();
  } else {
    filterWords();
  }
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

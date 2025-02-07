const knap = document.querySelector("button");
const guess = document.querySelector(".userNumber");
const imgAnimation = document.querySelector("img");

const RandomNumber = Math.round(Math.random() * 100);
/* console.log("Random tal:", RandomNumber); */

knap.addEventListener("click", checkNumber);

function checkNumber() {
  const userGuess = Number(guess.value); // Få værdien og konverter til et tal
  console.log("Gættet tal:", userGuess);

  if (userGuess === RandomNumber) {
    console.log("Rigtigt");
    document.querySelector("p").textContent = "Du gættede rigtigt!";
    imgAnimation.classList.remove("hidden");
    imgAnimation.classList.add("animation");
  } else if (userGuess > RandomNumber) {
    console.log("For højt");
    document.querySelector("p").textContent =
      "Dit tal er desværre for højt, prøv igen!";
    imgAnimation.classList.add("hidden");
  } else {
    console.log("For lavt");
    document.querySelector("p").textContent =
      "Dit tal er desværre for lavt, prøv igen!";
    imgAnimation.classList.add("hidden");
  }
}

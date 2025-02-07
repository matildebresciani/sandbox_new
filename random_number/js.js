document.querySelector("button").addEventListener("click", generateRndNumber);

function generateRndNumber() {
  const RandomNumber = Math.round(Math.random() * 100);
  console.log(RandomNumber);
  document.querySelector("p").textContent = RandomNumber;
}

/* Klaus' metode og noter

Math.floor runder tallet nedad
Math.ceil runder tallet opad
Math.round runder op hvis den er .5 eller derover, og runder ned hvis den er under .5

function getRandomNumber() {
const randomNum = Math.floor(Math.random() * 100);
    console.log("Random number", randomNum);
    document.querySelector("h2").textContent = randomNum;
}

*/

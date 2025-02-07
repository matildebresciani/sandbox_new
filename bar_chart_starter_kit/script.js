const list = document.querySelector("ul");

const barArr = [];

setInterval(generateBars, 1000);

function generateBars() {
  const randomNum = Math.round(Math.random() * 100);
  barArr.push(randomNum);
  console.log("generate bars", barArr);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (barArr.length >= 20) {
    console.log("den er længere end 20");
    barArr.shift();
    list.removeChild(list.firstElementChild);
  }
}

hentData();
setInterval(hentData, 10000);

const queue = document.querySelector(".antal");

function hentData() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((queueNumber) => {
      console.log("queueNumber", queueNumber);
      queue.innerHTML = `${queueNumber.inQueue}`;
      queue.classList.add("grow");
    });
}

queue.addEventListener("transitionend", () => {
  queue.classList.remove("grow");
});

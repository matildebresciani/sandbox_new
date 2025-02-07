const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

/* document.querySelector("ul").innerHTML = `<li><a href=${bc}>${bc}</a></li>`;

document.querySelector(
  "ul"
).innerHTML += `<li>&nbsp/&nbsp<a href=${bc}>Dette er et andet link</a></li>`;

document.querySelector(
  "ul"
).innerHTML += `<li>&nbsp/&nbspDette er et produktnavn</li>`; */

document.querySelector("button").addEventListener("click", createBreadcrumb);

function createBreadcrumb() {
  bc.forEach((product) => {
    console.log(product.name);
    console.log(product.link);

    const lastElm = bc[bc.length - 1].name;
    if (lastElm === product.name) {
      console.log("vi er igang med sidste elm");
      document.querySelector("ul").innerHTML += `<li>${product.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href=${product.link}>${product.name}</a>&nbsp/&nbsp</li>`;
    }
  });
}

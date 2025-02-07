const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

//filter
const alleElDrevne = vehicles.filter((veh) => veh.isElectric === true);
const mereEndToSaeder = vehicles.filter((veh) => veh.passengers > 2);
const jonas = vehicles.filter(
  (veh) => veh.ownedBy === "Jonas" && veh.isElectric
);
const rugbroedMereEndEn = vehicles.filter(
  (veh) => veh.fuel === "Rugbrød" && veh.passengers > 1
);

//byt det inde i () med navnet på den const man laver filtrering fra
showTheseVehicles(vehicles);

//knapperne
document.querySelector(".all").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

document.querySelector(".one").addEventListener("click", () => {
  showTheseVehicles(alleElDrevne);
});

document.querySelector(".two").addEventListener("click", () => {
  showTheseVehicles(mereEndToSaeder);
});

document.querySelector(".three").addEventListener("click", () => {
  showTheseVehicles(jonas);
});

document.querySelector(".four").addEventListener("click", () => {
  showTheseVehicles(rugbroedMereEndEn);
});

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>   
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });

  document.querySelectorAll("td").forEach((cell) => {
    if (cell.textContent === "undefined") {
      cell.textContent = "-";
    }
  });

  document.querySelectorAll("td").forEach((cell) => {
    if (cell.textContent === "true") {
      cell.textContent = "X";
    }
  });
}

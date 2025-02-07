"use strict";

let result;
const people = ["Harry", "Ron", "Hermione"];

//Tilføjer en person
result = people.push("Draco");
console.log("people", people);
console.log("result", result);

//Fjerner den sidste person
result = people.pop();
console.log("people", people);
console.log("result", result);

//Tilføjer "Neville"
result = people.push("Neville");
console.log("people", people);
console.log("result", result);

//Tilføjer Luna til array'et så der nu er 5
result = people.push("Luna");
console.log("people", people);
console.log("result", result);

//Returnerer et array kun med Harry, Ron og Hermione
result = people.slice(0, 3);
console.log("people", people);
console.log("result", result);

//Tilføjer Cho efter Harry
result = people.splice(1, 0, "Cho");
console.log("people", people);
console.log("result", result);

//Sætter Ginny ind på plads nr 1 i Array'et, dvs. efter Harry
people[1] = "Ginny";
console.log("people", people);
console.log("result", result);

//Tilføjer Fred og George til slut i Array'et
result = people.push("Fred", "George");
console.log("people", people);
console.log("result", result);

//Fortæller hvilket nummer Fred er i Array'et
result = people.indexOf("Fred");
console.log("people", people);
console.log("result", result);

//Fjerner Fred fra Array'et
result = people.splice(result, 1);
console.log("people", people);
console.log("result", result);

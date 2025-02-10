const fullName = "Matilde Pio Bresciani";

const firstName = fullName.substring(0, fullName.indexOf(" "));

const middleName = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.lastIndexOf(" ")
);

const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log(firstName, middleName, lastName);
console.log("First name:", firstName);
console.log("Middle name:", middleName);
console.log("Last name:", lastName);

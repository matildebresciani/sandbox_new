// 4.	Find the beginning of the last name in a full name

const fullName = "Matilde Bresciani";

console.log(fullName.substring(8, 9));

// 7.	Add spaces before a text, so the string will be at least 10 characters

const str1 = "         There is  space here     \n";
console.log("_" + str1 + "_");

//12.	Separate a comma-separated list into an array of individual items
const str2 = "Cat,Dog,Mouse,Rat";
const list = str2.split(",");
console.log(list);

//13.	Check if an url begins with "http://" or "https://"
const url =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith";

//false
console.log(url.startsWith("http://"));

//true
console.log(url.startsWith("https://"));

//20.	Remove extra whitespace before a text
const str3 = "         Bla bla";
console.log("_" + str3 + "_");

const str4 = str3.trimStart();
console.log("_" + str4 + "_");

//21.	Remove extra whitespace after a text
const str5 = "Bla bla      ";
console.log("_" + str5 + "_");

const str6 = str5.trimEnd();
console.log("_" + str6 + "_");

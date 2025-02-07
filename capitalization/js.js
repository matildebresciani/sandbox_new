// 3caPitalization
const str = "peter";

const str2 = str.substring(2, 3).toUpperCase();
console.log(str2);

const result1 = str.slice(0, 2) + str2 + str.slice(3);
console.log(result1);

//Real Capitalization
const str3 = str.substring(0, 1).toUpperCase();
console.log(str3);

const result2 = str3 + str.slice(1);
console.log(result2);

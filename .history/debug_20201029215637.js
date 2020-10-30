const c = require("./src/challenges");

console.clear();
// const arr = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// const res = c.concatName(arr);
// console.log(res);

const tel1 = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
const tel2 = [0, 1, 6];

const res = c.generatePhoneNumber(tel1);
console.log(res);

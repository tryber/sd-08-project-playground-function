const c = require("./src/challenges");

console.clear();
// const arr = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// const res = c.concatName(arr);
// console.clear();
// console.log(res);

//const tel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
//const tel = [];
//const tel = [1, 2, 3, 10, 5, 6, 7, 8, 9, 0, 1];
//const tel = [1, 2, 3, 10, 5, 6];
const tel = [1, 2, 3, 10, 22, 6];

const res = c.generatePhoneNumber(tel);

console.log(res);

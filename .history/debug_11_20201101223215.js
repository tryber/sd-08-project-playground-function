const c = require("./src/challenges")
console.clear();
// ["h3 th2r2!".
let arr = [8, 7, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let resposta = c.generatePhoneNumber(arr);
console.log(resposta);
console.log("(12) 34567-8901");
arr = [9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1];
resposta = c.generatePhoneNumber(arr);
console.log(resposta);
arr = [1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8];
resposta = c.generatePhoneNumber(arr);
console.log(resposta);

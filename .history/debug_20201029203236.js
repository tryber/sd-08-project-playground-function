const c = require("./src/challenges");

console.clear();
// const arr = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// const res = c.concatName(arr);
// console.clear();
// console.log(res);

// const tel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// const tel = [];
// const tel = [1, 2, 3, 10, 5, 6, 7, 8, 9, 0, 1];
// const tel = [1, 2, 3, 10, 5, 6];
// const tel = [1, 2, 3, 10, 22, 6];
// const res = c.generatePhoneNumber(tel);
// console.log(res);
// if (lineA < lineB + lineC && lineA > Math.abs(lineB + lineC)) return false;
// if (lineB < lineA + lineC && lineB > Math.abs(lineA + lineC)) return false;
// if (lineC < lineA + lineB && lineC > Math.abs(lineA + lineB)) return false;

/*
    False
    16, 9, 2
    10, 3, 4
    6, 2, 2
    10, 13, 2
    12, 17, 4
    5, 10, 3

*/

let res = c.triangleCheck(5, 1, 1);

console.log(res);

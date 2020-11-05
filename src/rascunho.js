// exercicio 09

// receber uma string 
// let str = "hi there";

// for (i in str) {
//     if (str[1] == 'a')
// }

// n = str.replace(/[aeiou]/g, )

// // /[aeiou]/g

// console.log(n)


// expressoes regulares /padrao/modificadores

function encode(string) {
  let stringSwap = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" };
  let encondeResult = "";
  encondeResult = string.replace(/[aeiou]/gi, m => stringSwap[m]);

  return encondeResult;
}

function decode(string) {
  let stringSwap = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" }
  let encondeResult = "";
  encondeResult = string.replace(/[12345]/gi, m => stringSwap[m]);

  return encondeResult;
}

console.log(decode('2r3ck'))
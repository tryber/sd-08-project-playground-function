// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === 'true' && valor2 === 'true') {
    return 'true';
  } else {
     return 'false';
  }
}
//console.log(compareTrue("false", "true"))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let res = 0;
  res = base * height / 2
  return res;
}
//console.log(calcArea())

// Desafio 3
function splitSentence(param) {
  // seu código aqui
  let resultado = param.split(" ") ;
   return resultado;
}
//console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(param) {
  // seu código aqui
   let ultimoItem = param[param.length-1];
   let primeiroItem = param[0];

   return ultimoItem + ',' + ' ' + primeiroItem;
}
//console.log(concatName('lucas','cassiano', 'ferraz', 'paolillo'))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = 3 * wins;
   let empate = 1 * ties;
   let res = vitoria + empate
  return res;
}
//console.log(footballPoints(2,2));

// Desafio 6
function highestCount(param) {
  // seu código aqui
  let res = 0;
  let cont = 0;
  for (let i = 0; i < param.length; i = i + 1) {
    if (param[i]> res){
      res = param[i];
    }
  }
  for (let i = 0; i < param.length; i = i + 1) {
      if (param[i] === res){
        cont = cont + 1;
      }
    }
  
  return cont;
}
 //console.log(highestCount(1,2,3,3));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(...param) {
  // seu código aqui
  let res = [];
  for(let i = 0; i < param.length; i = i + 1){
    if(param[i] % 3 == 0 && param[i] % 5 !== 0)
      res.push("fizz")
    if(param[i] % 5 == 0 && param[i] % 3 !== 0)
      res.push("buzz");
    if(param[i] % 3 == 0 && param[i] % 5 == 0)
      res.push("fizzBuzz");
    if(param[i] % 3 !== 0 && param[i] % 5 !== 0)
      res.push("bug!");
  }
  return res;
}
//console.log(fizzBuzz(2, 15, 7, 9, 45));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}

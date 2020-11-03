//Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = base * height / 2;
  return areaTriangulo;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(frase) {
  let transformacao = frase.split(' '); 
  return transformacao; 
}
console.log(splitSentence('Para o alto e avante andre'));


// Desafio 4
//return `${nomeInteiro[nomeInteiro.length - 1]}, ${nomeInteiro [0]}`; --> outro jeito de fazer
function concatName(nomeInteiro) {
  let inv = [];
  for (let i = 0; i < nomeInteiro.length; i += 1) {
    inv.push(nomeInteiro[i]);
  }
  return (inv[inv.length - 1] + ", " + inv[0]);
}

console.log(concatName(["andre", "phelipe", "de", "souza", "santana"]));


// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties + 1;
  let pontuacao = vitoria + ties;
  return pontuacao;
}

console.log(footballPoints(10, 1));

// Desafio 6
function highestCount(numero) {
  //qual o maior numero do meu array
  let maior = [];
  for (let i = 0; i < numero.length; i += 1) {   
    if (numero[i] > maior) {
      maior = numero[i];  
      }
  }

  let cont = 0;
  for (let i = 0; i < numero.length; i += 1) {   
    if (numero[i] === maior) {
      cont += 1; 
      }
    }  
    return cont;  
}  
console.log((highestCount([7, 2, 4, 5, 7, 5, 6 ,7])));



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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

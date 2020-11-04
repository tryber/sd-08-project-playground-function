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
const resultado = footballPoints(10, 1);
console.log(resultado);

// Desafio 6
function highestCount(numero) {
  //qual o maior numero do meu array  
  let numMaior = Math.max(...numero);

  let cont = 0;
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] === numMaior) {
      cont += 1;
    }
  }
  return cont;
}
console.log((highestCount([10, 10, 11, 11, 10])));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoMaior = Math.max(mouse, cat1, cat2);
    let gatosMaior = Math.max(cat1, cat2);
    if (gatosMaior >= cat1 && cat1 > cat2) {
        return "cat1";
    } else if (gatosMaior >= cat2 && cat2 > cat1) {
        return "cat2";
    } else if (cat1 && cat2 === posicaoMaior) {
        return "os gatos trombam e o rato foge";
    }
}
console.log(catAndMouse(10, 10, 10));

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      resultado.push("fizz");
    } else if (numeros[i] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!")
    }
  }
  return resultado;
}
console.log((fizzBuzz([15, 3, 5, 2, 7])));


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

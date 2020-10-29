// Desafio 1
function compareTrue(valorLogicoA, valorLogicoB) {
  if(valorLogicoA === true && valorLogicoB === true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// console.log(compareTrue(true, true));
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

//console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(texto) {
  return texto.split(" ");
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

//console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(arrayNumeros) 
{
  let cont = 0;
  let maiorValor = maiorNumeroDoVetor(arrayNumeros);

  for (let pos in arrayNumeros) 
  {
      if (arrayNumeros[pos] === maiorValor) 
      { 
          cont += 1;
      }        
  }    

  return cont;
}

function maiorNumeroDoVetor(arrayNumeros)
{
  let maiorValor = arrayNumeros[0];
  for (let pos in arrayNumeros) 
  {
      if (arrayNumeros[pos] > maiorValor) 
      { 
          maiorValor = arrayNumeros[pos];
      }        
  }    

  return maiorValor;
}

//console.log(maiorNumeroDoVetor([9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaEntreRatoGato1 = 0;
  let distanciaEntreRatoGato2 = 0;

  distanciaEntreRatoGato1 = mouse - cat1;
  distanciaEntreRatoGato2 = mouse - cat2;

  if(distanciaEntreRatoGato1 === distanciaEntreRatoGato2)
  {
    return "os gatos trombam e o rato foge";
  }
  else if(distanciaEntreRatoGato1 > distanciaEntreRatoGato2)
  {
    return "cat2";
  }
  else
  {
    return "cat1";
  }

}

// console.log(catAndMouse(8, 5, 6));
// console.log(catAndMouse(8, 6, 5));
// console.log(catAndMouse(8, 2, 2));

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

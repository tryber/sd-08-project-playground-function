// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
      return true;
    }   else {
          return false;
    }
  }

  compareTrue(true,true);




// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}
calcArea(2, 3);





// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let final = [];
  final = str.split(" ");
  return final;
}
splitSentence("Go Trybe");




// Desafio 4
function concatName(array) {
  // seu código aqui
  let lista = array[array.length -1] + ', ' + array[0];
  return lista;
}
concatName(['lucas', 'cassiano', 'ferraz', 'Paolillo']);





// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) - ties;
}

footballPoints(3, 2);


// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let repet = 0;
  for (let cont = 1; cont < array.length; cont++) {
    if (array[cont] > maior) {
      maior = array[cont];
    }
  } 
  for (let cont = 0; cont < array.length; cont++) {
    if (maior === array[cont]) {
      repet += 1;
    }
  }
  return repet;
}
highestCount([3, 1, 2, 3, 9, 5, 7]);




// Desafio 7
function catAndMouse() {
  // seu código aqui
}



// Desafio 8
function fizzBuzz(divisivel) {
  // seu código aqui
  let array = [];
    for (let cont = 0; cont <= divisivel.length; cont++) {
      if (divisivel[cont] % 3 === 0 && divisivel[cont] % 5 === 0) {
        array.push("fizzbuzz");
      } else if (divisivel[cont] % 5 === 0) {
        array.push("buzz");
      } else if (divisivel[cont] % 3 === 0) {
        array.push("fizz");
      } else {
        array.push("bug");
      }
    }
    return array;
    }
    console.log(fizzBuzz([2, 3, 5, 15, 7, 9, 45]));

// Desafio 9
function encode(vogais) {
  // seu código aqui
  vogais = vogais.replace(/a/g , "1");
  vogais = vogais.replace(/e/g , "2");
  vogais = vogais.replace(/i/g , "3");
  vogais = vogais.replace(/o/g , "4");
  vogais = vogais.replace(/u/g , "5");
  return vogais;
}
encode("naaaaeiou");


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

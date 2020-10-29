// Desafio 1
function compareTrue(boolean1, boolean2) {
    if (boolean1 && boolean2) {
        return true;
    }
   else {
        return false;
   }
};
console.log(compareTrue((5>2),(2<5)));


// Desafio 2
function calcArea(base, heigth) {
  let triangle = ((base * heigth) / 2);
  return triangle;
};
console.log(calcArea(10, 8.66));


// Desafio 3
function splitSentence(string) {
    let arrayString = string.split(" ");
    return arrayString;

};
console.log(splitSentence("go Trybe"));


// Desafio 4
function concatName(arrayString) {
    arrayString = arrayString[arrayString.length -1]  + ', ' + arrayString[0];
    return arrayString;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
let pointswins = 3;
let pointsties = 1;
      score = (wins*pointswins) + (ties*pointsties);
      return score
};
console.log(footballPoints(7, 3));


// Desafio 6
function highestCount(arrayNumeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in arrayNumeros) {
    let verificaNumero = arrayNumeros[index];
    for (let index2 in arrayNumeros) {
      if (verificaNumero === arrayNumeros[index2]) {
        contNumero++;
      }
    }
      if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
      }
    contNumero = 0;
  }
  return contRepetido;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
    let newArray = [];
    for(let index in arrayNumeros) {
    if ((arrayNumeros[index] % 3 == 0) && (arrayNumeros[index] % 5 !== 0)) {
        result = "fizz";  
        newArray.push(result)
    }
    else if ((arrayNumeros[index] % 5 == 0) && (arrayNumeros[index] % 3 !== 0)) {
      result = "buzz"  
      newArray.push(result)
    }
    else if ((arrayNumeros[index] % 3 == 0) && (arrayNumeros[index] % 5 == 0)) {
      result = "fizzBuzz"  
      newArray.push(result)
    }
    else {
        result = "bug!"
        newArray.push(result)
    }
    }
    return newArray;
};
console.log(fizzBuzz([2, 15, 7, 9, 45]));


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

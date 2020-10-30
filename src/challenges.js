//Feliz aniversário Lucas Cassiano Ferraz Paolillo

// Desafio 1
function compareTrue(status1, status2) {
  return status1 && status2;
  }
//console.log(compareTrue('true', 'true'));


// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
//console.log(calcArea(20, 50));


// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array; 
}
//console.log(splitSentence('go Trybe'));


// Desafio 4
function concatName(arrayStrig) {
  return `${arrayStrig[arrayStrig.length-1]}, ${arrayStrig[0]}`
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}
//console.log(footballPoints(5, 2));


// Desafio 6
function highestCount(array) {
  let max = 0;
  for(let fixed = 0; fixed < array.length; fixed += 1) {
    for(let find = fixed + 1; find < array.length; find += 1) {
      if(array[fixed] < array[find]) {
        max = array[find];
        fixed = find-1;
        find = array.length;
      } 
      else if (find == array.length-1) {
        max = array[fixed];
        fixed = array.length;
      }
    }
  }
  let pos = array.indexOf(max);
  let count = 0;
  for(let index = pos; index < array.length; index += 1) {
    if(max == array[index]) {
      count += 1;
    }
  }
  return count;
}
//console.log(highestCount([2, 9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if(distanciaCat1 > distanciaCat2) {
    return 'cat1'
  }
  else if(distanciaCat1 < distanciaCat2) {
    return 'cat2'
  } 
  else {
    return 'os gatos trombam e o rato foge'
  }
}
//console.log(catAndMouse(5, 15, 15));


// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for(let index in array) {
    if(array[index]%3 == 0 && array[index]%5 == 0) {
      newArray.push('fizzBuzz');
    }
    else if(array[index]%3 == 0) {
      newArray.push('fizz');
    }
    else if(array[index]%5 == 0) {
      newArray.push('buzz');
    }
    else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(text) { //hi there!
  codec = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let arrayString = text.split('');
  let newText = '';

  for(let index = 0; index < text.length; index += 1) {
    for(let key in codec) {
      if(key == arrayString[index]) {
        arrayString[index] = codec[key];
      }
    }
    newText += arrayString[index];
  }
  return newText;
}
//console.log(encode("hi there!"));


function decode(text) {
  codec = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let arrayString = text.split('');
  let newText = '';

  for(let index = 0; index < text.length; index += 1) {
    for(let key in codec) {
      if(codec[key] == arrayString[index]) {
        arrayString[index] = key;
      }
    }
    newText += arrayString[index];
  }
  return newText;
}
//console.log(decode("h3 th2r2!"));


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

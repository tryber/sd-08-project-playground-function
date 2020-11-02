// Desafio 1
function compareTrue(a, b) {
  if ( a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(2, 4));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 8));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(5, 3));

// Desafio 6
function highestCount(array) {
  let biggerNumber = 0;
  let repeatedNumber = 0;
  for (let index in array) {
    if (array[index] > biggerNumber) {
      biggerNumber = array[index];
    }
  }
  for (let index2 in array) {
    if (biggerNumber === array[index2]) {
      repeatedNumber += 1;
    }
  }
  return repeatedNumber;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let case1 = Math.abs(cat1 - mouse);
  let case2 = Math.abs(cat2 - mouse);
  if (case1 < case2) {
    return 'cat1';
  } else if (case2 < case1) {
    return 'cat2';
  } else if (case1 == case2) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 3, 5));

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index in array) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 == 0) {
        arrayFizzBuzz.push('fizz');
      } else if (array[index] % 5 == 0 && array[index] % 5 == 0) {
        arrayFizzBuzz.push('buzz');
      } else {
        arrayFizzBuzz.push('bug!');
      }    
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(word) {
  let phrase = '';
  for(let i in word){
    if(word[i] === 'a'){
      phrase += '1';
    }
    if(word[i] === 'e'){
      phrase += '2';
    }
    if(word[i] === 'i'){
      phrase += '3';
    }
    if(word[i] === 'o'){
      phrase += '4';
    }
    if(word[i] === 'u'){
      phrase += '5';
    } else if( word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i' && word[i] !== 'o' && word[i] !== 'u'){
      phrase += word[i];
    }
  }
  return phrase
}
console.log(encode("hi there!"));

function decode(word2) {
let phrase2 = '';
  for(let i in word2){
    if(word2[i] === '1'){
      phrase2 += 'a';
    }
    if(word2[i] === '2'){
      phrase2 += 'e';
    }
    if(word2[i] === '3'){
      phrase2 += 'i';
    }
    if(word2[i] === '4'){
      phrase2 += 'o';
    }
    if(word2[i] === '5'){
      phrase2 += 'u';
    } else if( word2[i] !== '1' && word2[i] !== '2' && word2[i] !== '3' && word2[i] !== '4' && word2[i] !== '5'){
      phrase2 += word2[i]
    }
  }
  return phrase2;
}
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(tech, name) {
  let listOfTech = [];
  if (tech === null || tech.length === 0) {
    return "Vazio!";
  } else {
    tech.sort();
    for (let key in tech) {
      let objectTech = {
        tech: tech[key],
        name: name
      }
      listOfTech.push(objectTech);
    }
    return listOfTech;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Aline'));

// Desafio 11
function generatePhoneNumber(array) {  
  let out = '(';  
  if (array.length != 11) {
    return ('Array com tamanho incorreto.');
  }
    for (let i = 0; i < array.length; i++) {
      let sum = 0;
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          sum += 1;
        } else if (sum >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }        
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (i == 2) {
        out += ') ';
      } else if (i === 7) {
        out += '-';
      }
      out += array[i];
    }     
  return out;
}
  console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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

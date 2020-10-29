// Desafio 1 :)
function compareTrue(test1, test2) {
  let answer = false;
  if (test1 && test2){
    answer = true;
  }
  return answer;
}

// Desafio 2
function calcArea(base, height) {
  return base * height/2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(name) {
  return (name[name.length-1] + ", " + name[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins + ties);
}

// Desafio 6
function highestCount(numbers) {
  let sorted = numbers.sort((a,b) => a - b), counter = 1;
  for (let i = numbers.length - 1; i >=0; i -= 1){
    if (sorted[i] == sorted[i - 1]){
      counter += 1;
    } else {
      break;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse), dist2 = Math.abs(cat2 - mouse), result;
  if (dist1 < dist2) {
    result = "cat1";
  } else if (dist2 < dist1) {
    result = "cat2";
  } else {
    result = "os gatos trombam e o rato foge";
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let key in numbers) {
    if (numbers[key]%3 == 0 && numbers[key]%5 == 0) {
      result[key] = "fizzBuzz";
    } else if (numbers[key]%3 == 0) {
      result[key] = "fizz";
    } else if (numbers[key]%5 == 0) {
      result[key] = "buzz";
    } else {
      result[key] = "bug!";
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let phraseArray = phrase.split('');
  for (let key in phraseArray){
    switch (phraseArray[key]){
      case 'a':
        phraseArray[key] = '1';
        break;
      case 'e':
        phraseArray[key] = '2';
        break;
      case 'i':
        phraseArray[key] = '3';
        break;
      case 'o':
        phraseArray[key] = '4';
        break;
      case 'u':
        phraseArray[key] = '5';
        break;
    }
  }
  return phraseArray.join('');
}
function decode(phrase) {
  let phraseArray = phrase.split('');
  for (let key in phraseArray){
    switch (phraseArray[key]){
      case '1':
        phraseArray[key] = 'a';
        break;
      case '2':
        phraseArray[key] = 'e';
        break;
      case '3':
        phraseArray[key] = 'i';
        break;
      case '4':
        phraseArray[key] = 'o';
        break;
      case '5':
        phraseArray[key] = 'u';
        break;
    }
  }
  return phraseArray.join('');
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

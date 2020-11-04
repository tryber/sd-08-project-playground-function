// Desafio 1
function compareTrue(valorX, valorY) {
  if (valorX === true && valorY === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) /2;
  return area;
}


// Desafio 3 - as informações referentes ao split() foram retiradas do dev media:https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(word) {
    let array = [];
    array = word.split(" ");
    return array;
}


// Desafio 4
function concatName(last_first) {
  let arrayName = [];
  for(let index = 0; index < last_first.length; index++){
   arrayName.push(last_first[index]);
   
}
  return(arrayName[arrayName.length-1] + ", " + arrayName[0])
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins *3) + ties;
  return points;
}


// Desafio 6 - as propriedades Math.max.apply() foram absorvidas e usadas a partir do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#:~:text=Retornando%20o%20maior%20elemento%20de%20um%20array&text=reduce()%20pode%20ser%20usada,%2C%20b)%20%7B%20return%20Math. 
function highestCount(numbers) {
  let bigger = Math.max.apply(null, numbers);
  let repeat = 0;
  for(let index = 0; index < numbers.length; index +=1){
      if(numbers[index] == bigger){
          repeat += 1;
      }
  }
  return repeat;  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2)   {
  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return 'cat2';
  }else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1';
  }else if(Math.abs(cat1 - mouse) == Math.abs(cat1 - mouse)){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let divisible = [];
  for(let index = 0; index < arrayNumbers.length; index++){
    if((arrayNumbers[index]%5 == 0) && (arrayNumbers[index]%3 == 0)){
      divisible[index] = 'fizzBuzz';
    }else if(arrayNumbers[index]%5 == 0){
      divisible[index] = 'buzz';
    }else if(arrayNumbers[index]%3 == 0){
      divisible[index] = 'fizz';
    }else{
      divisible[index] = 'bug!';
    }
  }
  return divisible;
}

// Desafio 9
function encode(forward) {
  let word = "";
  for(let index = 0; index < forward.length; index++){
    if(forward[index] == 'a'){
      word += 1;
    }else if(forward[index] == 'e'){
      word += 2;
    }else if(forward[index] == 'i'){
      word += 3;
    }else if(forward[index] == 'o'){
      word += 4;
    }else if(forward[index] == 'u'){
      word += 5;
    }else{
     word += forward[index];
    }
  }
  return word;
}
function decode(behind) {
  let reverse = ""
  for(let index = 0; index < behind.length; index++){
    if(behind[index] == '1'){
      reverse += 'a';
    }else if(behind[index] == '2'){
      reverse += 'e';
    }else if(behind[index] == '3'){
      reverse += 'i';
    }else if(behind[index] == '4'){
      reverse += 'o';
    }else if(behind[index] == '5'){
      reverse += 'u';
    }else{
     reverse += behind[index];
    }
  }
  return reverse;
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

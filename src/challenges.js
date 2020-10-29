// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if(bool1 == true && bool2 == true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = [];
  let index = 0;
  let arrayIndex = 0;
  for(let pos = 0; pos < sentence.length; pos += 1){
    if(sentence.slice(pos, (pos + 1)) == " "){
      splittedSentence[arrayIndex] = sentence.slice(index, pos);
      index = pos + 1;
      arrayIndex += 1;
    } else if(pos == (sentence.length - 1)){
      splittedSentence[arrayIndex] = sentence.slice(index, (pos + 1));
    }
  }
  return splittedSentence;
}

// Desafio 4
function concatName(arrayOfNames) {
  // seu código aqui
  let firstName = arrayOfNames[0];
  let lastName = arrayOfNames[arrayOfNames.length-1];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  // seu código aqui
  let higherNumber = arrayOfNumbers[0];
  let countNumber = 0;
  for(let pos = 1; pos < arrayOfNumbers.length; pos += 1){
    if(higherNumber < arrayOfNumbers[pos]){
      higherNumber = arrayOfNumbers[pos];
    }
  }
  for(let key = 0; key < arrayOfNumbers.length; key += 1){
    if(higherNumber == arrayOfNumbers[key]){
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))){
    return "cat1";
  }else if((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))){
    return "cat2";
  } else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // seu código aqui
  let fizbuz = [];
  for(let pos = 0; pos < arrayOfNumbers.length; pos += 1){
    if(arrayOfNumbers[pos] % 3 == 0 && arrayOfNumbers[pos] % 5 == 0){
      fizbuz.push("fizzBuzz");
    } else if(arrayOfNumbers[pos] % 3 == 0){
      fizbuz.push("fizz");
    } else if(arrayOfNumbers[pos] % 5 == 0){
      fizbuz.push("buzz");
    } else{
      fizbuz.push("bug!");
    }
  }
  return fizbuz;
}

// Desafio 9
function encode(sentence) {
  // seu código aqui
  let newSentence = "";
  for(let pos = 0; pos < sentence.length; pos += 1){
    switch(sentence.slice(pos, pos+1)){
      case "a":
        newSentence += "1";
        break;
      case "e":
        newSentence += "2";
        break;
      case "i":
        newSentence += "3";
        break;
      case "o":
        newSentence += "4";
        break;
      case "u":
        newSentence += "5";
        break;
      default:
        newSentence += sentence.slice(pos, pos+1);
    }    
  }
  return newSentence;
}

function decode(sentence) {
  // seu código aqui
  let newSentence = "";
  for(let pos = 0; pos < sentence.length; pos += 1){
    switch(sentence.slice(pos, pos+1)){
      case "1":
        newSentence += "a";
        break;
      case "2":
        newSentence += "e";
        break;
      case "3":
        newSentence += "i";
        break;
      case "4":
        newSentence += "o";
        break;
      case "5":
        newSentence += "u";
        break;
      default:
        newSentence += sentence.slice(pos, pos+1);
    }    
  }
  return newSentence;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let sortedArray = array.sort();
  let listSkills = [];

  if(sortedArray.length != 0){
    for(let pos = 0; pos < sortedArray.length; pos += 1){
      let skills = {};
      skills.tech = sortedArray[pos];
      skills.name = name;
      listSkills[pos] = skills;
    }
    return listSkills;
  } else{
    return "Vazio!";
  }
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

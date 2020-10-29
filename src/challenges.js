// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(true,true)); //

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2);
}
// console.log (calcArea(5,5)) //

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;    
}
// console.log(splitSentence("go Trybe")) //

// Desafio 4
function concatName(arrayName) {
  let nameOut = arrayName[arrayName.length - 1] + ", " + arrayName[0];
  return nameOut;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); / /

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let sumPoints = winsPoints + tiesPoints;
  return sumPoints;
}
// console.log(footballPoints(10, 5)) //

// Desafio 6
function highestCount(arrayNumbers) {
  let biggerValue = arrayNumbers[0];
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] > biggerValue) {
      biggerValue = arrayNumbers[index];
    } 
  }
  for (index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] == biggerValue) {
      count += 1;      
    }
  }
  return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) //

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  distance1 = Math.abs(distance1);
  distance2 = Math.abs(distance2);
  if (distance1 > distance2) {
    return ("cat2");
  } else if (distance1 < distance2) {
    return ("cat1");
  } else {
    return ("os gatos trombam e o rato foge")
  }  
}
// console.log(catAndMouse(20, 5, 35)) //


// Desafio 8
function fizzBuzz(array) {
  let arrayOut = [];
  for (let index = 0; index < array.length; index +=1) {
    let restValue3 = array[index] % 3;
    let restValue5 = array[index] % 5;
    if ((restValue3 == 0) && (restValue5 != 0)) {
      arrayOut[index] = "fizz"; 
    } else if ((restValue3 != 0) && (restValue5 == 0)) {
      arrayOut[index] = "buzz";
    } else if ((restValue3 == 0) && (restValue5 == 0)) {
      arrayOut[index] = "fizzBuzz";
    } else {
      arrayOut[index] = "bug!"
    }
  }
  return arrayOut;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45])) //

// Desafio 9
function encode(stringEncode) {  
  let newStringEncode = stringEncode.split();
  let stringFinalEncode = "";     
  for (let index = 0; index < stringEncode.length; index +=1) {
    if ((stringEncode[index] == "a") || (stringEncode[index] == "A")) {
      newStringEncode[index] = "1";      
    } else if ((stringEncode[index] == "e") || (stringEncode[index] == "E")) {
      newStringEncode[index] = "2";     
    } else if ((stringEncode[index] == "i") || (stringEncode[index] == "I")) {
      newStringEncode[index] = "3";
    } else if ((stringEncode[index] == "o") || (stringEncode[index] == "O")) {
      newStringEncode[index] = "4";
    } else if ((stringEncode[index] == "u") || (stringEncode[index] == "U")) {
      newStringEncode[index] = "5";
    } else {
      newStringEncode[index] = stringEncode[index];     
    }
    stringFinalEncode += newStringEncode[index];
  }  
  return (stringFinalEncode)
}
// console.log(encode("hi there!")) //

function decode(stringDecode) {  
  let newStringDecode = stringDecode.split();
  let stringFinalDecode = "";     
  for (let index = 0; index < stringDecode.length; index +=1) {
    if (stringDecode[index] == "1") {
      newStringDecode[index] = "a";      
    } else if (stringDecode[index] == "2") {
      newStringDecode[index] = "e";     
    } else if (stringDecode[index] == "3") {
      newStringDecode[index] = "i";
    } else if (stringDecode[index] == "4") {
      newStringDecode[index] = "o";
    } else if (stringDecode[index] == "5") {
      newStringDecode[index] = "u";
    } else {
      newStringDecode[index] = stringDecode[index];     
    }
    stringFinalDecode += newStringDecode[index];
  }  
  return (stringFinalDecode)  
}
// console.log(decode("h3 th2r2!")) //

// Desafio 10
function techList(arrayTec, name) {    
  let info2 = {};
  let arrayinfo2 = []; 
  let info = {
    tech: arrayTec,
    nome: name
  }
  for (let index = 0; index < arrayTec.length; index +=1) {
    if (arrayTec[index] == " ") {
      arrayTec[index] = "Vazio!"
    } 
  }
  arrayTec = arrayTec.sort();
  for (key in arrayTec) {
    info2[key] = {
      tech: arrayTec[key],
      name: name
    }    
    arrayinfo2[key] = info2[key]    
  }
  return (arrayinfo2)    
}

console.log(techList([" ", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))


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

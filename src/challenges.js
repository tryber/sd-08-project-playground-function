// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 == true && boolean2 == true){
    return true;
  }
  else{
      return false;
  }
  
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2;
 }

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(numeros) {
  let biggerNumber = 0
  let repeat = 0
  for(let index in numeros){
      if(numeros[index] > biggerNumber){
          biggerNumber = numeros[index]
      }
      else{}
  }
  for(let i in numeros){
      if(numeros[i] === biggerNumber){
          repeat += 1
      }
  }
  return repeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1;
  let distance2;
  if(cat1 > mouse){
      distance1 = cat1 - mouse;
  }
  else if(cat1 < mouse){
      distance1 = mouse - cat1;
  }
  if(cat2 > mouse){
      distance2 = cat2 - mouse;
  }
  else if(cat2 < mouse){
      distance2 = mouse - cat2;
  }
  if(distance1 < distance2){
      return "cat1"
  }
  else if(distance2 < distance1){
      return "cat2"
  }
  else if(distance1 == distance2){
      return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let result = []
  for(let i in arr){
      if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
          result.push("fizzBuzz")
      }
      else if(arr[i] % 3 == 0){
          result.push("fizz")
      }
      else if(arr[i] % 5 == 0){
          result.push("buzz")
      }
      else{
          result.push("bug!")
      }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let enCode = string
  for(let i in enCode){
      if(string[i] == "a"){
          enCode = enCode.replace("a","1")
      }
      else if(string[i] == "e"){
          enCode = enCode.replace("e","2")
      }
      else if(string[i] == "i"){
          enCode = enCode.replace("i","3")
      }
      else if(string[i] == "o"){
          enCode = enCode.replace("o","4")
      }
      else if(string[i] == "u"){
          enCode = enCode.replace("u","5")
      }
  } return enCode;
}

function decode(string) {
  let enCode = string
  for(let i in enCode){
      if(string[i] == "1"){
          enCode = enCode.replace("1","a")
      }
      else if(string[i] == "2"){
          enCode = enCode.replace("2","e")
      }
      else if(string[i] == "3"){
          enCode = enCode.replace("3","i")
      }
      else if(string[i] == "4"){
          enCode = enCode.replace("4","o")
      }
      else if(string[i] == "5"){
          enCode = enCode.replace("5","u")
      }
  } return enCode;
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
function triangleCheck(lineA, lineB, lineC) {
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);

  if (a < b + c && b < a + c && c < a + b) {
    if(a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b)){
        return true;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let count = 0
  for(let i in string){
      if(string[i] > 0){
          count += parseInt(string[i])
      }
  }
  return `${count} copos de àgua`
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

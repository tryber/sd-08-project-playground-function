// Desafio 1
function compareTrue(numero1, numero2) {
  if (numero1 && numero2 === true){
  return true}
  else {return false};
}



// Desafio 2
function calcArea(base, height) {return (base * height)/2;
 
}


// Desafio 3
function splitSentence(string) { 
return string.split(" ");
 
}


// Desafio 4
function concatName(nome) {
  for (let index = 0; index < nome.length; index ++){
  return nome[nome.length - 1] + "," + " " + nome[index];
  }
}
  


// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}


// Desafio 6
function highestCount(numbers) {
  let Maior = Math.max.apply(null, numbers)
  Conta = 0;
  
  for (let i = 0; i < numbers.length; i++){
  if(Maior == numbers[i]){
    Conta = Conta + 1;
    }
  }
    return Conta;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){return "cat1"} 
  else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)){return "cat2"}
  else {return "os gatos trombam e o rato foge"}
}


// Desafio 8
function fizzBuzz(array) {
  let recebeResposta = [];
  
  for (let i = 0; i < array.length; i++){
  if (array[i]%3 == 0 && array[i]%5 == 0){recebeResposta.push("fizzBuzz")}
  else if (array[i]%3 == 0){recebeResposta.push("fizz")}
  else if (array[i]%5 == 0){recebeResposta.push("buzz")}
  else {recebeResposta.push("bug!")}
  
}
  return recebeResposta;
}


// Desafio 9
function encode() {
  
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

// Desafio 1
function compareTrue(numero1, numero2) {
  if (numero1 && numero2 === true){
     return true}
     else {return false};
}
console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {return (base * height)/2;
 
}
console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(string) { 
  return string.split(" ");
 
}
console.log(splitSentence("Oi Tryber"))

// Desafio 4
function concatName(nome) {
  for (let index = 0; index < nome.length; index ++){
      return nome[nome.length - 1] + "," + " " + nome[index];
  }
}
  console.log(concatName(["Bruce", "nascimento", "Pereira", "Zelia", "Dias"]));


// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}
console.log(footballPoints(4, 2))

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
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);
  if (gato1 < gato2){return `"cat1"`} else if (gato1 == gato2){return `"os gatos trombam e o rato foge"`}
  else {return `"cat2"`} 
}
console.log(catAndMouse(10, 7, 4))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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

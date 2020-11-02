// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true
  }else{
    return false
  }
}
console.log(compareTrue(true, false))

//---------------------------------//

// Desafio 2
function calcArea(base, height) {

  return (base * height) / 2

}
console.log(calcArea(10, 10))

//---------------------------------//

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(" ")

  return resultado
}
console.log(splitSentence("Ola mundo"))

//---------------------------------//

// Desafio 4
function concatName(names) {
  value = names.length - 1

  return (`${names[value]}, ${names[0]}`)
}
console.log(concatName(['matheus', 'gabriel']))

//---------------------------------//

// Desafio 5
function footballPoints(wins, ties) {

  return ((wins * 3) + (ties * 1))

}

console.log(footballPoints(2, 2))

//---------------------------------//

// Desafio 6
function highestCount(numbers) {
  const numbersAlign = numbers.sort((a,b) => {return a - b})

  let numberRep = 0
  let numberCont = 0;
  let indexNumber = 0;
  let numberMaior = numbersAlign.length - 1

  for(index in numbersAlign) {
    let numberVerify = numbersAlign[index]

    for(index2 in numbersAlign){
      if(numberVerify === numbersAlign[index2] && numberVerify >= numbersAlign[numberMaior]){
        numberCont++;
      }
    }
    if(numberCont > numberRep) {
      numberRep = numberCont;
      indexNumber = index;
    }
    numberCont = 0
  }
  return numberRep
}

//---------------------------------//

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let mouseCat1 = mouse - cat1
  let mouseCat2 = mouse - cat2

  if(mouseCat1 < 0){
    mouseCat1 = mouseCat1 * -1
  }
  if(mouseCat2 < 0){
    mouseCat2 = mouseCat2 * -1
  }

  if(mouseCat1 < mouseCat2){
    return "cat1"
  }else if(mouseCat2 < mouseCat1){
    return "cat2"
  }
  if(mouseCat1 === mouseCat2){
    return "os gatos trombam e o rato foge"
  }
}

//---------------------------------//

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

//---------------------------------//

// Desafio 9
function encode() {
  // seu código aqui
}

//---------------------------------//

function decode() {
  // seu código aqui
}

//---------------------------------//

// Desafio 10
function techList() {
  // seu código aqui
}

//---------------------------------//

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

//---------------------------------//

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

//---------------------------------//

// Desafio 13
function hydrate() {
  // seu código aqui
}

//---------------------------------//


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

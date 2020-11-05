// Desafio 1
function compareTrue(bol1,bol2) {
  // seu código aqui

  if(bol1 == true && bol2 == true){
    return true
  }

  return false
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui

  return (base*height)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui

    return string.split(" ");
}



// Desafio 4
function concatName(array) {
  // seu código aqui
 
  let concat =  `${array[array.length-1]}, ${array[0]}`

  return concat
}



// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  wins = wins*3
  return wins + ties

}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  maior = 0
  marca = 0
  for(i=0; i < numbers.length; i++){
    if(maior < numbers[i]){
      maior = numbers[i]
      marca = 0
    }
    if(maior == numbers[i]){
      marca++
    }
  }

  return marca
}


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  if(( mouse - cat1) < (mouse - cat2 )){
    return "cat1"
  }
  else if(( mouse - cat2) < (mouse - cat1 )){
    return "cat2"
  }
  else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let recebeNomes = []
  // seu código aqui
  for( i = 0; i < array.length; i++){
    if(array[i] % 5 == 0 && array[i] % 3 == 0){
      recebeNomes.push("fizzBuzz")
    }
    else if(array[i] % 5 == 0){
      recebeNomes.push("buzz")
    }
    else if(array[i] % 3 == 0){
      recebeNomes.push("fizz")
    }
    else{
      recebeNomes.push("bug!")
    }
  }

  return recebeNomes

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

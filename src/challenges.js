// Desafio 1
function compareTrue(valueA, valueB) {
  return valueA && valueB;
}
// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
// Desafio 3
function splitSentence(inputSentence) {
  let output = inputSentence.split(' ');
  return output;
}
// Desafio 4
function concatName(nomeCompleto) {
  let output = nomeCompleto[nomeCompleto.length - 1] + ', ' + nomeCompleto[0];
  return output;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let totalPoints = (wins * pointsWin) + (ties * pointsTie);
  return  totalPoints;
}
// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let count = [];
  let compare = 0;
  let indice = 0;
  for (indice = 0; indice < numbers.length; indice+=1) {
    for (compare = indice; compare < numbers.length; compare+=1){
      if(numbers[compare] >= highestNumber) {
        (numbers[compare] > highestNumber) ? count=[]:'';
        if (compare != indice) {        
          highestNumber = numbers[compare];
          indice = compare;
          let aux = numbers.indexOf(highestNumber);
          count.push(aux);
          break;
        } else {
          // count = [];
          highestNumber = numbers[compare];
          let aux = numbers.indexOf(highestNumber);
          count.push(aux);
          break;
        } 
      }
    }
  }
  return count.length;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let distWin = '';
  console.log(distCat1, distCat2);
  const tie = "os gatos trombam e o rato foge";
  if (distCat1 > distCat2) {
    distWin = 'cat2';
  } else if ( distCat2 > distCat1) {
    distWin = 'cat1';
  } else { distWin = tie; }
  return distWin;
}
// Desafio 8
function fizzBuzz(num) {
  const fi = 'fizz'; // Divisivel por 3
  const bz = 'buzz'; // Divisivel por 5
  const fiBz = 'fizzBuzz' // Divisivel por 3 e por 5
  const x = 'bug!' // Não é divisivel;
  let output = [];
  for (let index in num){
    if (num[index] % 3 == 0 && num[index] % 5 == 0){
      output.push(fiBz);
    } else if (num[index] % 3 == 0){
      output.push(fi);
    } else if (num[index] % 5 == 0){
      output.push(bz);
    } else {
        output.push(x);
      }
  } 
  return output;
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

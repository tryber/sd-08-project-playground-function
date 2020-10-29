// Desafio 1
function compareTrue(x, y) {
 return x && y;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split (" ");
}

// Desafio 4
function concatName(arrNames) {
  let lastPosition = arrNames.length -1;

  let firstName = arrNames[0];
  let lastName = arrNames[lastPosition];
  return lastName + ", " + firstName;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(arr) {
  let maiorValor = Math.max(...arr);
  let count = 0;
  for (let i = 0; i< arr.length; i +=1){
    let valorAtual = arr[i];
    if(valorAtual == maiorValor){
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  gato1 = Math.abs(cat1 - mouse);
  gato2 = Math.abs(cat2 - mouse);
  
  if (gato1 < gato2) return 'cat1';
  if (gato2 < gato1) return 'cat2';
  return "os gatos trombam e o rato foge";
    
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzB = []
  for(let index = 0; index < arr.length; index +=1){
    let valorAtual = arr[index];
    if (valorAtual % 3 == 0 && valorAtual % 5 == 0){
      fizzB.push("fizzBuzz");
    }
    else if(valorAtual % 3 == 0){
      fizzB.push("fizz");
    }
    else if(valorAtual % 5 == 0){
      fizzB.push("buzz");
    }
    else{
      fizzB.push("bug!");
    }
  }
  return fizzB;
}

// Desafio 9
function encode(str) {
  let strReturn = '';

  for(i = 0; i < str.length; i++){
         
     let actualChar = str[i];
     
     switch (actualChar) {
     
       case 'a':
                    strReturn += '1';
       break;
       
       case 'e':
               strReturn += '2';
       break;
       
       case 'i':
               strReturn += '3';
       break;
       
       case 'o':
               strReturn += '4';
       break;
                     
       case 'u':
               strReturn += '5';
       break;
       
       default:
           strReturn += actualChar;
       break;
     }
  }
  
  return strReturn;
}
function decode(str) {
  let strReturn = '';

  for(i = 0; i < str.length; i++){
         
     let actualChar = str[i];
     
     switch (actualChar) {
     
       case '1':
               strReturn += 'a';
       break;
       
       case '2':
               strReturn += 'e';
       break;
       
       case '3':
               strReturn += 'i';
       break;
       
       case '4':
               strReturn += 'o';
       break;
                     
       case '5':
               strReturn += 'u';
       break;
       
       default:
           strReturn += actualChar;
       break;
     }
  }
  
  return strReturn;
}

// Desafio 10
function techList(tech, name) {
  tech.sort();
  
  let objReturn = [];
  
  for(i = 0; i < tech.length; i++){
      objReturn.push({
         tech: tech[i],
           name: name
    })
  }
  
  return objReturn;
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

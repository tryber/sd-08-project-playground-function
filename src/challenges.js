// Desafio 1
function compareTrue(boolean1, boolean2) {
    if (boolean1 && boolean2) {
        return true;
    }
   else {
        return false;
   }
};
console.log(compareTrue((5>2),(2<5)));


// Desafio 2
function calcArea(base, heigth) {
  let triangle = ((base * heigth) / 2);
  return triangle;
};
console.log(calcArea(10, 8.66));


// Desafio 3
function splitSentence(string) {
    let arrayString = string.split(" ");
    return arrayString;

};
console.log(splitSentence("go Trybe"));


// Desafio 4
function concatName(arrayString) {
    arrayString = arrayString[arrayString.length -1]  + ', ' + arrayString[0];
    return arrayString;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
let pointswins = 3;
let pointsties = 1;
      score = (wins*pointswins) + (ties*pointsties);
      return score
};
console.log(footballPoints(7, 3));


// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let contNumero = 0;

      for (let i = 1; i < arrayNumeros.length; i += 1) {
          if (maiorNumero < arrayNumeros[i]); 
            maiorNumero = arrayNumeros[i];{
          }
      }
      for (let i2 = 0; i2 < arrayNumeros.length; i2 += 1) {
          if (maiorNumero == arrayNumeros[i2]) {
            contNumero += 1;
          }
      }
      return contNumero
};
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
let distance = 0;
function catAndMouse(mouse, cat1, cat2) {
     if ((distance = Math.abs (mouse - cat1)) === (distance = Math.abs (mouse - cat2))) {
          result = "os gatos trombam e o rato foge";     
     }
     else if ((distance = Math.abs (mouse - cat1)) < (distance = Math.abs (mouse - cat2))) {
          result = "cat1";        
     }
     else {
          result = "cat2";     
     }
     return result;
    };  

  
console.log(catAndMouse(10 , 4, 22));


// Desafio 8
function fizzBuzz(arrayNumeros) {
    let newArray = [];
    for(let index in arrayNumeros) {
    if ((arrayNumeros[index] % 3 == 0) && (arrayNumeros[index] % 5 !== 0)) {
        result = "fizz";  
        newArray.push(result)
    }
    else if ((arrayNumeros[index] % 5 == 0) && (arrayNumeros[index] % 3 !== 0)) {
      result = "buzz"  
      newArray.push(result)
    }
    else if ((arrayNumeros[index] % 3 == 0) && (arrayNumeros[index] % 5 == 0)) {
      result = "fizzBuzz"  
      newArray.push(result)
    }
    else {
        result = "bug!"
        newArray.push(result)
    }
    }
    return newArray;
};
console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(code) {

    let palavra = code.split("");

    for (let index = 0; index < palavra.length; index +=1) {
        if (palavra[index] == "a") {
            palavra[index] = 1;
        }
        else if (palavra[index] == "e"){
                palavra[index] = 2;    
        }
        else if (palavra[index] == "i"){
                palavra[index] = 3;
        }
        else if (palavra[index] == "o"){
                palavra[index] = 4;
        }
        else if (palavra[index] == "u"){
              (palavra[index]) = 5;
        }
        
    }
    let list = palavra.join("");
    return list; 
};
console.log(encode("hi there!")); 


function decode(code) {
  let palavra = code.split("");

    for (let index = 0; index < palavra.length; index +=1) {
        if (palavra[index] == "1") {
            palavra[index] = "a";
        }
        else if (palavra[index] == "2"){
                palavra[index] = "e";    
        }
        else if (palavra[index] == "3"){
                palavra[index] = "i";
        }
        else if (palavra[index] == "4"){
                palavra[index] = "o";
        }
        else if (palavra[index] == "5"){
              (palavra[index]) = "u";
        }
        
    }
    let list = palavra.join("");
    return list; 
};
console.log(decode("h3 th2r2!"));




// Desafio 10
function techList(array, name) {

};
console.log((["React", "Jest", "HTML", "CSS", "JavaScript"]), "Lucas");

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

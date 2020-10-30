// Desafio 1
function compareTrue(p1, p2) {
  if(p1 === true && p2 === true){
    return true
  } else {
    return false
  }
}
// console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
// console.log(calcArea(3,20));

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(" ");
   return arrayString;
}

// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(array) {
  let newArray = array[array.length -1] + ', ' + array[0];
    return newArray;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, tie) {
  const pontoVitoria = 3;
  const pontoEMpate = 1;
  let pontoCampeonato = (wins*pontoVitoria)+(tie*pontoEMpate);
  return pontoCampeonato;
}
// console.log(footballPoints(5,1));


// Desafio 6
function highestCount(numArray) {
  // let maiorValor = Math.max.apply(null, numArray);
  let maiorValor1 = numArray[0];
  let vezesMaiorValor = 0;
  let indice;
  for( indice =0; indice < numArray.length -1; indice +=1){
    if (numArray[indice] > maiorValor1){
      maiorValor1 = numArray[indice];
    }
  }

  for( indice =0; indice < numArray.length; indice +=1){
    if(numArray[indice] === maiorValor1){
      vezesMaiorValor += 1;
    }
  }
  return vezesMaiorValor;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 10, 9]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disMouseCat1 = Math.abs(cat1 - mouse);
  let disMouseCat2 = Math.abs(cat2 - mouse);
  let messagem;
   if(disMouseCat1 < disMouseCat2){
    messagem = 'cat1';
  } else if(disMouseCat1 > disMouseCat2){
    messagem = 'cat2';
  } else {
    messagem = 'os gatos trombam e o rato foge';
  }
  return messagem;
}
// console.log(catAndMouse(1, 0, 2));


// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayName = [];
  let indice;
  for( indice=0; indice < arrayNumbers.length; indice +=1){
    if(arrayNumbers[indice] % 5 === 0 && arrayNumbers[indice] % 3 === 0){
      arrayName.push("fizzBuzz");
    } else if(arrayNumbers[indice] % 3 === 0){
        arrayName.push("fizz");
    } else if(arrayNumbers[indice] % 5 === 0){
      arrayName.push("buzz");
    } else {
      arrayName.push("bug!");
    }
  }
  
  return arrayName;  
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(phrase) {
  let codigos ={
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  let phraseCodif = '';
  let indice;

  for(indice = 0; indice < phrase.length; indice +=1){
    for( let key in codigos){
      if(phrase[indice] === key){
        phraseCodif += codigos[key];
      } else {
        phraseCodif += phrase[indice];
      }

    }
  }  
    
    // phraseCodif = phrase.replace(codigos);
    // phraseCodif = phrase.replace(/u/g, "5");

  return phraseCodif;

}
function decode() {
  // seu código aqui
}
console.log(encode("hi there!"));



// Desafio 10
function techList(tech, name) {
  let listaOrdenada = tech.sort();
  let arrayCriado = [];
  let indice;
  
  if(listaOrdenada.length === 0){
    return 'Vazio!'
  } 
  for(indice = 0; indice < listaOrdenada.length; indice +=1){
      arrayCriado.push({
       tech: listaOrdenada[indice],
        name: name
      })
    }
  
  return arrayCriado;

}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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

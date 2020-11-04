// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if( valor1 == true && valor2 ==true){
    return true;
  }else{
    return false;
  };
};

compareTrue(true , false);



// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return(area);
};





// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
};





// Desafio 4
function concatName(name) {
  // seu código aqui
  return `${name[name.length - 1]}, ${name[0]}`;

};








// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;

}





// Desafio 6
function highestCount(array) {
  // seu código aqui
  array.sort();
  
  let greatest = array[array.length - 1];

  let greatestRep = 0;

  for(i = array.length; i >= 0; i--){
    if(array[i] === greatest){
     greatestRep++;
    }
  }

  return(greatestRep);
};







// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  
  if(positionCat1 < positionCat2){
    return 'cat1';
  }else if(positionCat2 < positionCat1){
    return 'cat2';
  }else if(positionCat1 === positionCat2){
    return'os gatos trombam e o rato foge';
  };
};

console.log(catAndMouse(12, 9, 11));





// Desafio 8
function fizzBuzz(param) {
  // seu código aqui

  fizzBuzzNumbers=[];

  for(contador = 0; contador < param.length; contador += 1){
      if(param[contador] % 15 === 0){
        fizzBuzzNumbers.push('fizzBuzz');
      }else if(param[contador] % 5 === 0){
        fizzBuzzNumbers.push('buzz');
      }else if(param[contador] % 3 === 0){
        fizzBuzzNumbers.push('fizz');
      }else{
        fizzBuzzNumbers.push('bug!');
      }
  };

  return fizzBuzzNumbers;
};





// Desafio 9
function encode(string) {
  // seu código aqui
  let codeString ='';
  for(i = 0; i < string.length; i++){
    if(string[i] === 'a'){
        codeString += 1;
    }else if(string[i] === 'e'){
        codeString += 2;
    }else if(string[i] === 'i'){
        codeString += 3;
    }else if(string[i] === 'o'){
        codeString += 4;
    }else if(string[i] === 'u'){
        codeString += 5;
    }else{
      codeString += string[i];
    }
  };
  return codeString;
};








function decode(string) {
  // seu código aqui
  let codeString ='';
  for(i = 0; i < string.length; i++){
    if(string[i] === '1'){
        codeString += 'a';
    }else if(string[i] === '2'){
        codeString += 'e';
    }else if(string[i] === '3'){
        codeString += 'i';
    }else if(string[i] === '4'){
        codeString += 'o';
    }else if(string[i] === '5'){
        codeString += 'u';
    }else{
      codeString += string[i];
    }
  };
  return codeString;
}






// Desafio 10
function techList(nameTech, name) {
  // seu código aqui
  
  let ordem = nameTech.sort();
  let learn = [];
  
  if (nameTech.length === 0) {
    return "Vazio!"
  }
  
  for (let techName of ordem) {
    learn.push({
      tech: techName,
      name: name,
    });
  }
  return learn;
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

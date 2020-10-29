// Desafio 1
function compareTrue(a,b) {
  if ( a==true && b==true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area;
  area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let resultado;
  resultado = str.split(" ");
  return resultado;
}

// Desafio 4
function concatName(list) {
  let fraseFinal;
  let index = list.length;
  fraseFinal=list[index-1] + ", " + list[0];
  return fraseFinal;
}

// Desafio 5
function footballPoints(vit,emp) {
  let pontosTotal;
  pontosTotal=vit*3 + emp;
  return pontosTotal;
}

// Desafio 6
function highestCount(list) {
  let maior =0;
  let contador=0;
  for (let index in list){
    if (maior>=list[index]){
      maior=maior;
    }else{
      maior=list[index];
    }
  }
  for (let key in list){
    if(maior == list[key]){
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let dist1,dist2;
  dist1=cat1 - mouse;
  dist2=cat2 - mouse;
  if(dist1>dist2){
    return "cat2";
  }else if (dist2>dist1){
    return "cat1";
  }else{
    return "os gatos trombam e o gato foge"
  }

}

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

// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true){
    return true; 
  }else{
    return false;
  }
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
console.log(calcArea(4,6));
// Desafio 3
//Bibliografia: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(string) {
  let dividido = [];
  dividido = string.split(" ");
  return dividido;
}
console.log(splitSentence("ola povo"));
// Desafio 4
function concatName(array) {
  let invertido = [];
  for(let i = 0; i < array.length; i++){
  invertido.push(array[i]);
  }
  return(invertido[invertido.length-1] + ", " + invertido[0])
} 
console.log(concatName(['pedro', 'joão' , 'rosa', 'maria']));
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins *3) + ties;
  return points;
} 
console.log(footballPoints(3, 2));
// Desafio 6
function highestCount(arrayNumeros) {
  let maior = 0;
  let vezes = 0;
  for (let i = 0; i < arrayNumeros.length; i ++) {
    if (arrayNumeros[i] > maior){
      maior = arrayNumeros[i];
    }
    for (let i = 0; i < arrayNumeros.length; i ++) {
      if (arrayNumeros[i] == maior){
      vezes += 1;
      }
    }
  }
  return vezes;
}
  console.log(highestCount([3, 2, 3, 1, 2]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if(distancia1 == distancia2) {
    gatoVencedor = "os gatos trombam e o rato foge";
  }else if(distancia2 < distancia1) {
    gatoVencedor = "cat2";
  }else{
    gatoVencedor = "cat1";
  }
  
  return gatoVencedor;
}
console.log(catAndMouse(2, 3, 3))
// Desafio 8
function fizzBuzz(array) {
  let divisiveis = [];
  for(let i=0; i< array.length; i++){
    if((array[i]%3==0) && (array[i]%5==0)) {
    divisiveis[i] = "fizzBuzz"
    }else if(array[i]%3==0) {
      divisiveis[i] = "fizz";
    }else if(array[i]%5==0) {
      divisiveis[i] = "buzz";
    }else {
      divisiveis[i] = "bug!"
    }    
  }
  return divisiveis;
}
console.log(fizzBuzz([2, 3, 15, 30]));
// Desafio 9
function encode(stringQualquer) {
  let concatenado = '';
  for(let i = 0; i < stringQualquer.length; i++){
    if(stringQualquer[i] == 'a'){
      concatenado += 1;
    }else if(stringQualquer[i] == 'e'){
      concatenado += 2;
    }else if(stringQualquer[i] == 'i'){
      concatenado += 3;
    }else if(stringQualquer[i] == 'o'){
      concatenado += 4;
    }else if(stringQualquer[i] == 'u'){
      concatenado += 5;
    }else{
      concatenado += stringQualquer[i];
    }
  }
  return concatenado;
}
console.log(encode('samuel ramos campos'))
function decode(codigo) {
  let transcrito = '';
  for(let i = 0; i < codigo.length; i++){
    if(codigo[i] == 1){
      transcrito += 'a';
    }else if(codigo[i] == 2){
      transcrito += 'e';
    }else if(codigo[i] == 3){
      transcrito += 'i';
    }else if(codigo[i] == 4){
      transcrito += 'o';
    }else if(codigo[i] == 5){
      transcrito += 'u';
    }else{
      transcrito += codigo[i];
    }
  }
  return transcrito;
}
console.log((decode('s1m52l r1m4s c1mp4s')))
// Desafio 10
function techList(tecnologias, name) {
  let objetos = [];
  let tecnologias_ordem = tecnologias.sort()
  if(tecnologias.length == 0){
    objetos = 'Vazio!'
  }else{
    for(i=0; i < tecnologias_ordem.length; i++ ){
      objetos[i] = {
        tech: tecnologias_ordem[i],
        name: name
      }
    }
  }
  return objetos;
}
console.log(techList(['css', 'java', 'html', 'python'], "samuel"));
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
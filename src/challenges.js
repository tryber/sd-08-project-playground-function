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
  dist1=Math.abs(mouse-cat1);
  dist2=Math.abs(mouse-cat2);
  if (dist2>dist1){
    return "cat1";
  }else if(dist1>dist2){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(list) {
  let resultado=[];
  for (let index in list){
    if(list[index]%3==0 && list[index]%5!=0){
      resultado.push("fizz");
    }else if (list[index]%3!=0 && list[index]%5==0){
      resultado.push("buzz");
    }else if(list[index]%3==0 && list[index]%5==0){
      resultado.push("fizzBuzz");
    }else if(list[index]%3!=0 && list[index]%5!=0){
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(str) {
  for(let index in str){
    if(str[index]=="a"){
      str=str.replace(/a/g,"1");
    }else if(str[index]=="e"){
      str=str.replace(/e/g,"2");
    }else if(str[index]=="i"){
      str=str.replace(/i/g,"3");
    }else if(str[index]=="o"){
      str=str.replace(/o/g,"4");
    }else if (str[index]=="u"){
      str=str.replace(/u/g,"5");
    }
  }
  return str;
}
function decode(str) {
  for(let index in str){
    if(str[index]=="1"){
      str=str.replace(/1/g,"a");
    }else if(str[index]=="2"){
      str=str.replace(/2/g,"e");
    }else if(str[index]=="3"){
      str=str.replace(/3/g,"i");
    }else if(str[index]=="4"){
      str=str.replace(/4/g,"o");
    }else if (str[index]=="5"){
      str=str.replace(/5/g,"u");
    }
  }
  return str;
}

// Desafio 10
function techList(list,name) {
  let resultado=[]
  list.sort();
  if(list.length ==0){
    return "Vazio!";
  }else{
    for (key in list){
      resultado[key]={
        tech:list[key],
        name:name
      }
    }return resultado;
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  let maior=0;
  let menor=0;
  
  let ddd,number1,number2,numberFull;
  for (let index in list){
    if (maior>=list[index]){
      maior=maior;
    }else{
      maior=list[index];
    }
  }
  for ( let index in list){
    if(menor<=list[index]){
      menor=menor;
    }else{
      menor=list[index];
    }
  }
  if(maior<=9 && menor>=0 && number.length==10){
    ddd="("+list[0]+list[1]+")";
    number1=""+list[2]+list[3]+list[4]+list[5]+list[6]+"";
    number2=""+list[7]+list[8]+list[9]+list[10];
    numberFull=ddd+" "+number1+"-"+number2;
    return numberFull;
  }else if(number.length!=10){
    return "Array com tamanho incorreto.";
  }else if(maior>9 && menor<0){

  }
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let condicao1,condicao2,condicaoFinal;
  if( lineA<lineB+lineC && lineB<lineA+lineC && lineC<lineB+lineA){
    condicao1=true;
  if(lineA>Math.abs(lineB-lineC) && lineB>Math.abs(lineA-lineC) && lineC>Math.abs(lineA-lineB)){
    condicao2=true;
  }
  if(condicao1==true && condicao2==true){
    return true;
  }else{
    return false;
  }
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

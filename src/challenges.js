// Desafio 1
function compareTrue(x,y) {
  if (x && y ){
    return true;
  } else {return false;}
}
// Desafio 2
function calcArea(base,height) {
  return (base*height)/2
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")
  return array
}
// Desafio 4
function concatName(arrayStrings) {
  let array = [],ultima = arrayStrings[arrayStrings.length -1],primeira = arrayStrings[0];
  array=`${ultima}, ${primeira}`
  return array
} 
// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+(ties*1)
}
// Desafio 6
function highestCount(arrayN) {
  let max = Math.max(...arrayN),rep = 0;
  for (i in arrayN) {
    if (max == arrayN[i]){
      rep+=1
    }
  }return rep
} 
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gato1 = Math.abs(mouse-cat1),gato2 = Math.abs(mouse-cat2);
  if(gato1<gato2){return "cat1"} 
  else if (gato2<gato1){return "cat2"} 
  else {return "os gatos trombam e o rato foge"}
}
// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayRetorno = []
  for (let i = 0; i < arrayFizz.length; i++){
      if (arrayFizz[i] % 3 == 0 && arrayFizz[i] % 5 == 0){arrayRetorno.push(`fizzBuzz`)} 
      else if (arrayFizz[i] % 3 == 0 && arrayFizz[i] % 5 != 0){arrayRetorno.push("fizz")} 
      else if (arrayFizz[i] % 3 != 0 && arrayFizz[i] % 5 == 0){arrayRetorno.push("buzz")} 
      else {arrayRetorno.push("bug!")}
  }return arrayRetorno
}
// Desafio 9
function encode(p) {
  let a=p.replace(/a/gi,'1'),
  e=a.replace(/e/gi,'2'),
  i=e.replace(/i/gi,'3'),
  o=i.replace(/o/gi,'4'),
  u=o.replace(/u/gi,'5')
  return u;
}
function decode(p) {
  let a=p.replace(/1/gi,'a'),
  e=a.replace(/2/gi,'e'),
  i=e.replace(/3/gi,'i'),
  o=i.replace(/4/gi,'o'),
  u=o.replace(/5/gi,'u')
  return u;
}
// Desafio 10
function techList(array,name) {
  let objRetorno = [],objSort=array.sort();    
  if (array != ""){
    for(i=0;i<array.length;i++){
      objRetorno.push({
        tech: objSort[i],name: name;
      })
    }
  } else {return "Vazio!"}
  return objRetorno
}
// Desafio 11
function generatePhoneNumber(n) {  
  let numeroT,
  retorno = (`(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`) 
  function find(n, val) {
    let repeat = [], i = -1,cont=0;
    while ((i = n.indexOf(val, i+1)) != -1){
        repeat.push(i);
    }  cont = repeat.length
    return cont;
  }  
  //função acima conta quantas vezes o número se repete, consultada na internet porém fiz modificações.  
  if(n.length == 11){
    for(let i=0;i<n.length;i++){ 
      numeroT = find(n,n[i])
      if (n[i]< 0 || n[i]>9 || numeroT>=3){
        return "não é possível gerar um número de telefone com esses valores"
      }         
    }    
  } else {
    return "Array com tamanho incorreto."
  }
  return retorno
}
// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if(
    lineA<(lineB+lineC) && 
    lineB<(lineA+lineC) && 
    lineC<(lineB+lineA) &&
    lineA>Math.abs(lineB-lineC) && 
    lineB>Math.abs(lineA-lineC) && 
    lineC>Math.abs(lineB-lineA)){
    return true;
  } else{
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  let repl = string.replace(/\s/g, ''),int = 0;
  for(var i=0;i<repl.length;i++){
    if(isNaN(repl[i])==false){  
    int+=parseInt(repl[i])
    }
  }
  if(int==1){return (`${int} copo de água`);
  }else{return (`${int} copos de água`);}
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
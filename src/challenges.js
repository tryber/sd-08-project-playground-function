// Desafio 1
function compareTrue(x,y) {
  if (x && y ){
    return true;
  } else {
    return false;
  }
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
  array = []
  let ultima = arrayStrings[arrayStrings.length -1]
  let primeira = arrayStrings[0]
  array=`${ultima}, ${primeira}`
  return array
} 
// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+(ties*1)
}
// Desafio 6
function highestCount(arrayN) {
  let max = Math.max(...arrayN)
  let rep = 0;
  for (i in arrayN) {
    if (max == arrayN[i]){
      rep+=1
    }
  }return rep
} 
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gato1 = Math.abs(mouse-cat1)
  let gato2 = Math.abs(mouse-cat2)
  if(gato1<gato2){
    return "cat1"
  } else if (gato2<gato1){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayRetorno = []
  for (let i = 0; i < arrayFizz.length; i++){
      if (arrayFizz[i] % 3 == 0 && arrayFizz[i] % 5 == 0){
        arrayRetorno.push(`fizzBuzz`)
      } else if (arrayFizz[i] % 3 == 0 && arrayFizz[i] % 5 != 0){
        arrayRetorno.push("fizz")
      } else if (arrayFizz[i] % 3 != 0 && arrayFizz[i] % 5 == 0){
        arrayRetorno.push("buzz")
      } else {
        arrayRetorno.push("bug!") 
      }
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
  let objeto = {};    
  objeto["tech"]=array; 
  objeto["name"]=name;

  return objeto;
}console.log(techList(["html"],"felipe"))




let objeto = [];  
let array = ['react','jest','html','css','javascript'];
//   for(i in array){
//     objeto[i]=["tech"]=array[i],
//     objeto["name"]="felipe";
//   }  
// console.log(objeto)



objeto = [{`tech: ${array[0]}`}]; 
console.log(objeto)












// Desafio 11
function generatePhoneNumber(array) {
  let retorno="",verificaRepetir=0;
  if(array.length == 11){

    for(let i=0;i<array.length;i++){ //continuar amanhã esta idéia
      verificaRepetir=array.indexOf(i);
    }

    retorno=`(${array[0]}${array[1]})${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
   
  } else {
    return "Array com tamanho incorreto."
  }
  return retorno
}
// generatePhoneNumber([1,1,9,4,5,6,7,8,9,5,1])

//-----------------------------------------------------------

// let array = [1,1,9,4,5,6,7,8,9,5,1],verificaRepetir=0;

// for(let i=0;i<array.length;i++){ 

//     if(array[i]==array[i+1]){
//       verificaRepetir+=1

//       if (verificaRepetir>=3){
//         // console.log("Números repetidos" + verificaRepetir)
//         break
//       }
//     }
// } console.log(verificaRepetir)

//-----------------------------------------------------------


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



// let palavra = "1 cachaça, 5 cervejas e 1 copo de vinho1",
// array=[],cont=0;

// for(let i=0;i<palavra.length;i+=1){
//   cont=palavra[i]
//   if(
//     cont.isInteger(palavra[i])
//     ){
//     cont+=parseInt(palavra[i],10);
//   }
  
    
  
  
// }

// console.log(Number.isInteger(cont))

// console.log(isInteger(5))





// Desafio 13
function hydrate(string) {
  let repl = string.replace(/\s/g, ''),int = 0;
  for(var i=0;i<repl.length;i++){
    if(isNaN(repl[i])==false){  
    int+=parseInt(repl[i])
    }
  }
  if(int==1){
    return (`${int} copo de água`);
  }else{
    return (`${int} copos de água`);
  }
}console.log(hydrate("1cerveja"));















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

// Desafio 9
function encode(forward) {
  let word = "";
  for(let index = 0; index < forward.length; index++){
    if(forward[index] == 'a'){
      word += 1;
    }else if(forward[index] == 'e'){
      word += 2;
    }else if(forward[index] == 'i'){
      word += 3;
    }else if(forward[index] == 'o'){
      word += 4;
    }else if(forward[index] == 'u'){
      word += 5;
    }else{
     word += forward[index];
    }
  }
  return word;
}
console.log(encode('hi there!'));

function decode(behind) {
  let reverse = ""
  for(let index = 0; index < behind.length; index++){
    if(behind[index] == '1'){
      reverse += 'a';
    }else if(behind[index] == '2'){
      reverse += 'e';
    }else if(behind[index] == '3'){
      reverse += 'i';
    }else if(behind[index] == '4'){
      reverse += 'o';
    }else if(behind[index] == '5'){
      reverse += 'u';
    }else{
     reverse += behind[index];
    }
  }
  return reverse;
}
console.log(decode('h3 th2r2!'));
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let divisible = [];
  for(let index = 0; index < arrayNumbers.length; index++){
    if((arrayNumbers[index]%5 == 0) && (arrayNumbers[index]%3 == 0)){
      divisible[index] = 'fizzBuzz';
    }else if(arrayNumbers[index]%5 == 0){
      divisible[index] = 'buzz';
    }else if(arrayNumbers[index]%3 == 0){
      divisible[index] = 'fizz';
    }else{
      divisible[index] = 'bug!';
    }
  }
  return divisible;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

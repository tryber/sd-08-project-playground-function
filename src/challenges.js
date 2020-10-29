// Desafio 1
function compareTrue(a, b)
{
  if(a === true && b === true)
    return true;
  else
    return false;
}


// Desafio 2
function calcArea(base, height)
{
  return base * height / 2;
}

// Desafio 3
function splitSentence(word)
{
  return word.split(" ");
}

// Desafio 4
function concatName(phrase)
{
  let input = phrase;
  let result = [input[input.length - 1], input[0]];
  console.log(input[input.length - 1] + " " + input[0]);
  return result;
}
concatName(["Lucas", "Cassiano", "Ferraz", "Paollilo"])

// Desafio 5
function footballPoints(wins, ties)
{
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers)
{
  let higher = 0;
  let count = 0;

  for(let i = 0; i < numbers.length; i += 1)
  {
    if(numbers[i] > higher)
    {
      higher = numbers[i];
      count = 1;
    }
    else if(numbers[i] == higher)
      count += 1;
  }

  return count;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2)
{
  if(cat1 > mouse)
    cat1dist = cat1 - mouse;
  else if(cat1 < mouse)
    cat1dist = mouse - cat1;

  if(cat2 > mouse)
    cat2dist = cat2 - mouse;
  else if(cat2 < mouse)
    cat2dist = mouse - cat2;

  if(cat1dist < cat2dist)
    return "cat1";
  else if(cat1dist > cat2dist)
    return "cat2"
  else
    return "os gatos trombam e o rato foge";

}

// Desafio 8
function fizzBuzz(arr)
{
  let result = [];
  for(let i = 0; i < arr.length; i += 1)
  {
    if(arr[i] % 3 == 0 && arr[i] % 5 != 0)
      result[i] = "fizz";
    else if(arr[i] % 3 != 0 && arr[i] % 5 == 0)
      result[i] = "buzz";
    else if(arr[i] % 3 == 0 && arr[i] % 5 == 0)
      result[i] = "fizzBuzz";
    else
      result[i] = "bug!";
  }
  return result;
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

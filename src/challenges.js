// Desafio 1
function compareTrue(a, b)
{
  return num1 && num2;
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



function encode(input)
{
  let result = input;
  result = result.replace(/a/g, "1");
  result = result.replace(/e/g, "2");
  result = result.replace(/i/g, "3");
  result = result.replace(/o/g, "4");
  result = result.replace(/u/g, "5");

 return result;
}


function decode(input)
{
  let result = input;
  result = result.replace(/1/g, "a");
  result = result.replace(/2/g, "e");
  result = result.replace(/3/g, "i");
  result = result.replace(/4/g, "o");
  result = result.replace(/5/g, "u");

  return result;
}





// Desafio 10
function techList(techs, name)
{
  if(techs.length == 0)
    return "Vazio!";

  let array = [];
  techs.sort();
  for(let i = 0; i < techs.length; i +=1)
  {
    let tech = techs[i];
    array[i] = {tech, name};
  }
  console.log(array);
}

techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");





// Desafio 11
function generatePhoneNumber(arr)
{
  if(arr.length != 11)
    return "Array com tamanho incorreto.";

  let count = 1;

  for(let i = 0; i < arr.length; i += 1)
  {
    if(arr[i] < 0 || arr[i] > 9)
      return "não é possível gerar um número de telefone com esses valores";

      for(let j = i + 1; j < arr.length; j += 1)
      {
        if(arr[i] == arr[j])
          count += 1;
      }
    if(count >= 3)
      return "não é possível gerar um número de telefone com esses valores";
    else
      count = 1;;
  }

  let phoneNumber = "(" + arr[0] + arr[1] + ") " + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + "-" + arr[7] + arr[8] + arr[9] + arr[10];


  return phoneNumber;
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

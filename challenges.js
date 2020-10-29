//Requisito 1 - Usando o operador &&
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
compareTrue(false, false);

//Requisito 2 - Área do triângulo
function calcArea(base, height) {
  console.log((base * height) / 2);
  return (base * height) / 2;
}
calcArea(10, 20);

//Requisito 3 - Dividindo a frase
function splitSentence (sentence) {
  console.log(sentence.split(" "));
  return sentence.split(" ");
}

splitSentence('go Trybe')
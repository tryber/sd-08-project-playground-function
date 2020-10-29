//Requisito 1 - Usando o operador &&
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false));

//Requisito 2 - Área do triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(7, 15))


// Usando o operador &&

function compareTrue(bool1, bool2){
  if ((bool1 === "true") && (bool2 === "true")) {
    return true;
  }
  else {
    return false;
  }
};

console.log(compareTrue("true", "true"));
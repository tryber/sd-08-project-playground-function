function compareTrue(firstBoolean, secondBoolean) {
  if (
    (firstBoolean == false && secondBoolean == false) ||
    firstBoolean != secondBoolean
  ) {
    return false;
  }
  return true;
}

console.log(compareTrue(false, false));

function compareTrue(firstBoolean, secondBoolean) {
  if (
    (firstBoolean == false && secondBoolean == false) ||
    firstBoolean != secondBoolean
  ) {
    return false;
  }
  return true;
}

compareTrue(false, false);

// Desafio 1
function compareTrue(valueA, valueB) {

    if (valueA && valueB) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}

// Desafio 3
//O método split() divide uma String numa lista ordenada (substrings), colocando numa array, e retorna o array.
function splitSentence(string) {
    return string.split(" ");
}

// Desafio 4
function concatName(arrayDeStrings) {
    return [arrayDeStrings.lenght - 1] + "," + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
    return 3 * wins + 1 * ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {

}

// Desafio 7
function catAndMouse(a, b, c) {
    let cat1 = Math.abs(c - a);
    let cat2 = Math.abs(c - b);
    if (cat1 < cat2) {
        return "Cat A";
    } else if (cat2 < cat1) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
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
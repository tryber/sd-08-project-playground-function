// Desafio 1
function compareTrue(boolean1, boolean2) {
    return boolean1 && boolean2
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {

    string = string.trim(); // Removing whitespaces from both ends of the string

    let stringsArray = [];
    stringsArray[0] = "";
    let index = 0;

    //Runnig across the string
    for (let char = 0; char < string.length; char += 1) {

        //If current character is not a space
        if (string[char] !== " ") {

            //Current character is concatenated to the current array position
            stringsArray[index] += string[char];

        } else {
            //If its a space, creates a new position in the array and initializes it as an empty String
            index += 1;
            stringsArray[index] = "";
        }

    }
    return stringsArray;
}

// Desafio 4
function concatName(fullName) {

    let firstName = fullName[0];
    let lastName = fullName[fullName.length - 1];

    return `${lastName}, ${firstName}`;

}

// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
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
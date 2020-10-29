// Desafio 1

function compareTrue(a, b) {
    if (a == true && b == true) {
        return true;
    } else
        return false;

}

// Desafio 2
function calcArea(base, height) {
    let area = (base * height) / 2
    return area;
}

// Desafio 3
function splitSentence(string) {
    let arrayString = [];
    arrayString = string.split(" ");
    return arrayString;
}

// Desafio 4

function concatName(array) {

    let string = "";
    string = array[array.length - 1] + ", " + array[0];
    return string;
}




// Desafio 5
function footballPoints(wins, ties) {
    let qtdpontos = (wins * 3) + ties;
    return qtdpontos;
}

// Desafio 6
function highestCount(arraynum) {
    let maior = 0;
    let ocorrencias = 0;

    // achar o maior no array
    for (let i = 0; i < arraynum.length; i += 1) {
        if (arraynum[i] > maior) {
            maior = arraynum[i];
        }
    }
    // nº de ocorrencias
    for (let j = 0; j < arraynum.length; j += 1) {
        if (arraynum[j] === maior) {
            ocorrencias += 1;
        }
    }
    return ocorrencias;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    cat1 = Math.abs(cat1 - mouse);
    cat2 = Math.abs(cat2 - mouse);

    if (cat2 === cat1) {
        return 'os gatos trombam e o rato foge';
    } else if (cat2 < cat1) {
        return 'cat2';
    } else
        return 'cat1';


}


// Desafio 8
function fizzBuzz(arrayNum) {
    let arrayString = [];
    for (let i = 0; i < arrayNum.length; i += 1) {
        if (arrayNum[i] % 3 == 0 && arrayNum[i] % 5 == 0) {
            arrayString.push('fizzBuzz');

        } else if (arrayNum[i] % 3 == 0) {
            arrayString.push('fizz');
        } else if (arrayNum[i] % 5 == 0) {
            arrayString.push('buzz');
        } else
            arrayString.push('bug!');
    }
    return arrayString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


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
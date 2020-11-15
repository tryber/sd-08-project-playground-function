// Desafio 1  // commit inicial 2
function compareTrue(a, b) {
    if (a && b === true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, altura) {

    return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {

    return string.split(' ');
}

// Desafio 4
function concatName(array) {
    let first;
    let last;

    first = array[0];
    last = array[array.length - 1];

    return last + ", " + first;

}

// Desafio 5
function footballPoints(w, t) {
    let wins = w;
    let ties = t;

    return (wins * 3) + ties; //acho que funcionaria apenas (w*3)+t sem precisar declarar variavel antes

}

// Desafio 6
function highestCount(array) {
    let count = 0;
    let maior = Math.max(...array);

    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === maior) {
            count++;
        }

    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    let distance1 = Math.abs(mouse - cat1)
    let distance2 = Math.abs(mouse - cat2)

    if (distance1 === distance2) {
        return 'os gatos trombam e o rato foge';
    } else if (distance1 < distance2) {
        return 'cat1';
    } else if (distance2 < distance1) {
        return 'cat2';
    }

}

// Desafio 8
function fizzBuzz(array) {

    let fizzBuzz = array;

    for (let pos = 0; pos < fizzBuzz.length; pos++)
        if (fizzBuzz[pos] % 3 === 0 && fizzBuzz[pos] % 5 === 0) {
            fizzBuzz[pos] = "fizzBuzz";
        } else if (fizzBuzz[pos] % 3 == 0) {
        fizzBuzz[pos] = "fizz";
    } else if (fizzBuzz[pos] % 5 == 0) {
        fizzBuzz[pos] = "buzz";
    } else {
        fizzBuzz[pos] = "bug!";
    }

    return fizzBuzz;
}

// Desafio 9

function encode(string) {

    let cripted = "";

    for (let pos = 0; pos < string.length; pos++) {

        if (string[pos] === "a") {
            cripted += "1";
        } else if (string[pos] === "e") {
            cripted += "2";
        } else if (string[pos] === "i") {
            cripted += "3";
        } else if (string[pos] === "o") {
            cripted += "4";
        } else if (string[pos] === "u") {
            cripted += "5";
        } else {
            cripted += string[pos];
        }
    }
    return cripted;
}

function decode(string) {
    let uncripted = "";
    for (let pos = 0; pos < string.length; pos++)

        if (string[pos] === "1") {
        uncripted += "a";
    } else if (string[pos] === "2") {
        uncripted += "e";
    } else if (string[pos] === "3") {
        uncripted += "i";
    } else if (string[pos] === "4") {
        uncripted += "o";
    } else if (string[pos] === "5") {
        uncripted += "u";
    } else {
        uncripted += string[pos];
    }

    return uncripted;
}

// Desafio 10
function techList(tech, name) {

    // lembrar de perguntar depois dessa!
}

// Desafio 11
function generatePhoneNumber(array) {
    let count3 = 0;
    if (array.length != 11) {
        return "Array com tamanho incorreto";
    }
    for (let pos1 = 0; pos1 < array.length; pos1++) {
        if (array[pos1] < 0 || array[pos1] > 9) {
            return "não é possível gerar um número de telefone com esses valores1";
        }
        for (let pos2 = 0; pos2 < array.length; pos2++) {
            if (array[pos1] === array[pos2]) {
                count3++;
                if (count3 >= 3) {
                    return "não é possível gerar um número de telefone com esses valores2";
                } else {
                    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
                }
            }
        }
    }

}


// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
    if (ladoA < (ladoB + ladoC) && ladoA > Math.abs(ladoB - ladoC) || ladoB < (ladoA + ladoC) && ladoB > Math.abs(ladoA - ladoC) || ladoC < (ladoB + ladoA) && ladoC > Math.abs(ladoB - ladoA)) {
        return true;
    } else {
        return false;
    }

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
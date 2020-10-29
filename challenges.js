// 1 - Usando o operador &&

function compareTrue (valor1, valor2) {
    if (valor1 && valor2){
        return true;
    } else {
        return false;
    }
}

//console.log(compareTrue(1, 1));

// 2 - Área do triângulo

function calcArea (base, height) {
    let area = base * height / 2;
    return area;
}

//console.log(calcArea(50, 80));

// 3 - Dividindo a base

function splitSentence (literal) {
    let split = literal.split(" ");
    return split;
}

//console.log(splitSentence("go Trybe"));

// 4 - Concatenação de strings

function concatName (array) {
    let string;
    for (i in array){
        if(i == array.length - 1){
            string = array[i];
        }
    }
    if(array[0]){
        string += ", " + array[0];
    }
    return string;
}

//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]))

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
function concatName(array) {
    return array[array.length - 1] + ", " + array[0]
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paollillo"]));

// Desafio 5
function footballPoints(wins, ties) {
    return 3 * wins + 1 * ties;
}

// Desafio 6
function highestCount(numbers) {
    let highestNumber = numbers[0]
    for(let i = 0; i < numbers.length; i+=1)
        if(numbers[i] > highestNumber){
            highestNumber = numbers[i]
        }
    {
        let result = 0
        for(let i = 0; i < numbers.lenght; i +=1){
            if (numbers[i] == highestNumber){
                result += 1
            }
        }
    }
    return result
    }

// Desafio 7
function catAndMouse(a, b, c) {
    let cat1 = Math.abs(c - a);
    let cat2 = Math.abs(c - b);
    if (cat1 < cat2) {
        return "cat1";
    } else if (cat2 < cat1) {
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(array_of_numbers) {
    let result = [];
    for (i = 0; i < array_of_numbers.lenght - 1; i+=1) {
        if (i % 3 == 0 && i % 5 == 0) {
            return "fizzBuzz";
        } else if (i % 3 == 0) {
            return "fizz";
        } else if (i % 5 == 0) {
            return "buzz";
        } else {
            return "bug!";
        };
    }
    return result
}

    // Desafio 9
    function encode(string) {
        let stringEncoDeco = string
            for (i = 0; i < string - 1; i +=1) {
                if (i == "a") {
                    return 1;
                } else if (i == "e") {
                    return 2;
                } else if (i == "i") {
                    return 3;
                } else if (i == "o") {
                    return 4;    
                } else if (i == "u") {
                    return 5;
                };
            }
    }
    function decode() {
        for (i = 0; i < string - 1; i+=1) {
            if (1 == "a") {
                return "a";
            } else if (2 == "e") {
                return "e";
            } else if (3 == "i") {
                return "i";
            } else if (4 == "o") {
                return "o";    
            } else if (5 == "u"){
                return "u";
            };
        }
        return stringEncoDeco;
    }
    

    // Desafio 10
    function techList(arrayOfTechs, name) {
        let arrayOfObject = {};
        if (arrayOfTechs.lenght < 0){
            let object = {};
            return "Vazio!";
        } else{
            for (let i =0; i < arrayOfTechs.lenght; i += 1){
                object.tech = arrayOfTechs[index];
                object.name = name;
                arrayOfObject.push(object);
            }
        }
        return arrayOfObject;
        }

    // Desafio 11
    function generatePhoneNumber() {
        // seu código aqui
    }

    // Desafio 12
    function triangleCheck() {
        
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

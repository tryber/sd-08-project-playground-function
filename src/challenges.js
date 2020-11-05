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
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

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
        let result = 0
        for(let i = 0; i < numbers.length; i +=1){
            if (numbers[i] == highestNumber){
                result += 1
            }
        }
        return result   
    }
    
// Desafio 7
function catAndMouse(pointCat1, pointCat2, pointMouse) {
    let cat1Distance = Math.abs(pointCat1 - pointMouse);
    let cat2Distance = Math.abs(pointCat2 - pointMouse);
    let result = "";
    if(cat1Distance < cat2Distance){
        result = "cat1";
    } else if (cat2Distance < cat1Distance){
        result = "cat2";
    } else if (cat1Distance == cat2Distance){
        result = "os gatos trombam e o rato foge";
    }
    return result
}

// Desafio 8
function fizzBuzz(array) {
    let result = [];
    for (i = 0; i < array.length; i +=1) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0) {
            result.push("fizzBuzz");
        } else if (array[i] % 3 == 0) {
            result.push("fizz");
        } else if (array[i] % 5 == 0) {
            result.push("buzz");
        } else {
            result.push("bug!");
        };
    }
    return result;
}
console.log(fizzBuzz([3, 3, 3, 3, 3]))

    // Desafio 9
    function encode(string) {
        let stringEncoDeco = string
            for (i = 0; i < string.length; i +=1) {
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
    function decode(string) {
        let stringEncoDeco = string
        for (i = 0; i < string.length; i+=1) {
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
        let arrayOfObject = [];
        if (arrayOfTechs.length < 0){
            let object = {};
            return "Vazio!";
        } else {
            for (let i = 0; i < arrayOfTechs.length; i += 1){
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

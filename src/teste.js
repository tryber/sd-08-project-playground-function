// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

let palavra = 'hi there!', nPalavra = '';

for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === 'a') {
        nPalavra += 1;
    } else if (palavra[i] === 'e') {
        nPalavra += 2;
    } else if (palavra[i] === 'i') {
        nPalavra += 3;
    } else if (palavra[i] === 'o') {
        nPalavra += 4;
    } else if (palavra[i] === 'u') {
        nPalavra += 5;
    } else {
        nPalavra += palavra[i];
    }
}
console.log(nPalavra);
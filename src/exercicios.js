/*7 - Caça ao rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. 
Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, 
calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro 
(sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função
 deverá retornar "cat2".

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".*/


function catAndMouse(mouse, cat1, cat2) {
    let catCloser = '';
    if ((cat1 - mouse) < (cat2 - mouse)) {
        catCloser = 'cat1';
    } else if ((cat1 - mouse) > (cat2 - mouse)) {
        catCloser = 'cat2';
    } else {
        catCloser = 'Os gatos trombam e o rato foge';
    }
    return catCloser
}

console.log(catAndMouse(2, 10, 12))

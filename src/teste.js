let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

console.log(generatePhoneNumber(number));

function generatePhoneNumber(number) {

    let nNumber = '';
    let cMaior = 0;

    if (number.length != 11) {
        return 'Array com tamanho incorreto.';
    }
    for (let i = 0; i < number.length; i += 1) {
        cMaior = 0;
        if (number[i] < 0 || number[i] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        for (let c = 0; c < number.length; c += 1) {
            if (number[i] === number[c]) {
                cMaior += 1;
            }
        }
        if (cMaior >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    } 
    if (number.length === 11) {
        for (let i = 0; i < number.length; i += 1) {
            if (nNumber[0] === undefined) {
                nNumber += '(';
                nNumber += number[i];
            } else if (nNumber.length < 3) {
                nNumber += number[i];
                nNumber += ') ';
            } else if (nNumber.length < 9) {
                nNumber += number[i];
            } else if (nNumber.length === 9) {
                nNumber += `${number[i]}-`;
            } else if (i < number.length) {
                nNumber += number[i];
            }
        }
        return nNumber;
    }
}
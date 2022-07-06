"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') { //se um ou outro for string, vai concatenar.
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2; //se os dois forem números, vai somar. 
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('olá', ', bom?'));
console.log(somarValores('Hoje é dia ', 5));

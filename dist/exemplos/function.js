"use strict";
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2; //.toString (por alguma eventual falha)
}
console.log(somarValoresNumericos(1, 5));
function printValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorSi(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(5, 6, dividirPorSi));

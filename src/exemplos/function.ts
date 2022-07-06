function somarValoresNumericos(numero1: number, numero2: number): number { //este :number garante que o retorno seja number 
    return numero1 + numero2;//.toString (por alguma eventual falha)
}

console.log(somarValoresNumericos(1, 5));

function printValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number { //esse parametro 'numero' vem do callback declarado
    return numero * numero;
}

function dividirPorSi(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));

console.log(somarValoresNumericosETratar(5, 6, dividirPorSi))
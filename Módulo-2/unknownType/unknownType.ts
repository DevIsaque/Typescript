// Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = 'Olá, mundo!';
valorVariavel = [];

console.log(valorVariavel);

// Exemplo 02: Erro ao tentar atribuir um valor do tipo "unknown" a outros tipos:

let valor: unknown;

// let valor1: boolean = valor;  (ERRO, pois valor não é booleano, isso se aplica com todos os tipos primitivos)

// Exemplo 03: Diferença entre: "any" vs "unknown"

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

//console.log(algumaCoisaAny.toFixed(2)); Any não avisa quando está errado.

if(typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed(2)); // Aqui não há erro
}


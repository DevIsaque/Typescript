"use strict";
// Exemplo 01 - Uso de Colchetes:
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]);
// Exemplo 02 - Array Object
let frutasObject = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]);
// Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas = ['português', 'inglês', 'espanhol'];
idiomas.push('francês');
console.log(idiomas);
// Exemplo 04 - Identificar tamanho do array - médoto 'length'
let cores = ['azul', 'vermelho', 'amarelo'];
console.log(`O array tem ${cores.length} cores.`);
// Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [1, 2, 3];
let maisNumeros = [...listaNumeros, 4, 5];
console.log(maisNumeros);
// Exemplo 06 = Exemplo de Array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'Java');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(`Linguagem ${i + 1}: ${linguagens[i]}`);
    }
}
funcaoLinguagens(linguagensArray);

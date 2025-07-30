// Exemplo 01 - Uso de Colchetes:
let frutas: string[] = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]); 

// Exemplo 02 - Array Object
let frutasObject: Array<string> = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]);

// Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['português', 'inglês', 'espanhol'];
idiomas.push('francês');
console.log(idiomas);

// Exemplo 04 - Identificar tamanho do array - médoto 'length'
let cores: Array<string> = ['azul', 'vermelho', 'amarelo'];
console.log(`O array tem ${cores.length} cores.`);

// Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros: Array<number> = [1, 2, 3];
let maisNumeros: Array<number> = [...listaNumeros, 4, 5];
console.log(maisNumeros);

// Exemplo 06 = Exemplo de Array com laço de iteração
let linguagensArray: string[] = new Array('JavaScript', 'Python', 'Java');

function funcaoLinguagens(linguagens: string[]): void {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(`Linguagem ${i + 1}: ${linguagens[i]}`);
    }
}

funcaoLinguagens(linguagensArray);
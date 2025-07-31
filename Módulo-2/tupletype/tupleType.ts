// Exemplo 01 - Uso simples de tuplas em TypeScript

let dadosPessoa: [string, string, number];
dadosPessoa = ['Isaque', 'Engenheiro de Software', 35];

console.log(dadosPessoa)


// Exemplo 02 - Acessando o valor da Tupla
let dadosPessoa1: [string, string, number];
dadosPessoa1 = ['Isaque', 'Engenheiro de Software', 35];
console.log(`Nome: ${dadosPessoa1[0]}, Profissão: ${dadosPessoa1[1]}, Idade: ${dadosPessoa1[2]}`);

// Exemplo 03 - Outro forma de usar tuplas em Typescript (com labels)
let dadosPessoa2: [nome: string, profissao: string, idade: number] = ['Isaque', 'Engenheiro de Software', 35];
console.log(dadosPessoa2)


// Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['maçã', 'banana', 'laranja', 'uva'];
console.log(... listaFrutas);

// Exemplo 05 - Lista Heterogênea de Tuplas
let listaFrutas2: [number, boolean, ...string[]] = [3, true, ...listaFrutas];
console.log(listaFrutas2);

// Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Isaque', 'Carla'], [35, 30]);
console.log(resultado);

// Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
    | [nome: string, sobrenome: string]
    | [nome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome){
    return [...nome];
}
console.log(criarPessoa('Isaque', 'Silva'));
console.log(criarPessoa('Isaque', 'de', 'Silva'));
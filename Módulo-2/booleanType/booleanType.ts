// Exemplo 01

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida); // true
console.log(tarefaPendente); // false

// Exemplo 02
let concluido: boolean = false;

if(!concluido){
    console.log("Tarefa concluída com sucesso!");
}else{
    console.log("Tarefa não concluída!");
}

// Exemplo 03
let pessoa: {
    nome: string;
    idade: number;
    cnh: boolean;
    carro: boolean;
};
pessoa = {
    nome: "Isaque",
    idade: 15,
    cnh: false,
    carro: true,
};

if(pessoa.idade >= 18 && pessoa.cnh && pessoa.carro) {
    console.log(`${pessoa.nome} é maior de idade, possui CNH e um carro`);
} else if(pessoa.idade >= 18 && !pessoa.cnh && pessoa.carro) {
    console.log(`${pessoa.nome} é maior de idade, não possui CNH mas tem um carro`);
} else if(pessoa.idade >= 18 && pessoa.cnh && !pessoa.carro) {
    console.log(`${pessoa.nome} é maior de idade, possui CNH mas não tem carro`);
} else if(pessoa.idade >= 18 && !pessoa.cnh && !pessoa.carro) {
    console.log(`${pessoa.nome} é maior de idade, não possui CNH e não tem carro`);
} else if (pessoa.idade < 18 && !pessoa.cnh && pessoa.carro) {
    console.log(`${pessoa.nome} é menor de idade, não possui CNH mas ganhou um carro de presente`);
} else {
    console.log(`${pessoa.nome} é menor de idade, não possui CNH e não tem carro`);
}
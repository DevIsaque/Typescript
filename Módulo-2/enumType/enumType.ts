// Exemplo 01: Numeric Enums

enum Idiomas{
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}
console.log(Idiomas) 

// Exemplo 02: String Enums
enum Dia{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia.Segunda)


// Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando const)
const enum Comida{
    Pizza,
    Hamburguer,
    Macarrão,
    Sushi,
    Churrasco,
}

function comida(c: Comida){
    return 'Comidas muito apetitosas';
}

console.log(comida(Comida.Pizza))

// Exemplo 004: Quando usar Enum?

enum Tarefa{
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns, você concluiu a tarefa',
}

if(concluidaTarefa.status === Tarefa.Done){
    console.log(concluidaTarefa.descricao)
}
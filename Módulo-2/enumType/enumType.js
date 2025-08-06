"use strict";
// Exemplo 01: Numeric Enums
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Espanhol"] = 1] = "Espanhol";
    Idiomas[Idiomas["Ingles"] = 2] = "Ingles";
    Idiomas[Idiomas["Frances"] = 3] = "Frances";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
// Exemplo 02: String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
function comida(c) {
    return 'Comidas muito apetitosas';
}
console.log(comida(0 /* Comida.Pizza */));
// Exemplo 004: Quando usar Enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns, você concluiu a tarefa',
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log(concluidaTarefa.descricao);
}

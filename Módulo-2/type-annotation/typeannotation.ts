// Variáveis [Type Annotations]

let nome: string = "Isaque";
console.log(nome);

// Array [Type Annotations]
let animais: string[] = ["Cachorro", "Gato", "Pássaro"];
console.log(animais);

// Objeto [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = {
    nome: "Eclipse",
    ano: 1990,
    preco: 50000
};
console.log(carro);

// Função [Type Annotations]
function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumero(5, 10));
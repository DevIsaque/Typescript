import readline from 'readline';

function perguntar(pergunta: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve)=>{
    rl.question(pergunta, (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
}

function perguntarNumero(pergunta: string): Promise<number> {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) =>{
            rl.close();
            const numero = parseFloat(resposta);
            if (isNaN(numero)) {
                console.log("Por favor, insira um número válido.");
                resolve(perguntarNumero(pergunta)); // Chama novamente se a entrada não for um número
            } else {
                resolve(numero);
            }
        });
    });
    

}

function tabuada(numero: number): void {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

async function main() {
  const nome = await perguntar("Qual é o seu nome? ");
  console.log(`Bem-vindo, ${nome}!`);
  let continuar: boolean = true;
  while(continuar){
    const tipoCalculadora = await perguntar("Qual calculadora deseja utilizar? (1- Números Simples) (2- Números Avançada) (3- Tabuada) ");
  

    
    if (tipoCalculadora === '1') {

        const operacao = await perguntar("Qual operação você deseja realizar? (soma 1, subtracao 2, multiplicacao 3, divisao 4): ");

        const num1 = await perguntarNumero("Digite o primeiro número: ");
        const num2 = await perguntarNumero("Digite o segundo número: ");
        let resultado:number;
        switch (operacao) {
        case '1':
            resultado = num1 + num2;
            console.log(`Resultado da soma: ${resultado}`)
            break;
        case '2':
            resultado= num1 - num2;
            console.log(`Resultado da subtração: ${resultado}`)
            break;
        case '3':
            resultado = num1 * num2;
            console.log(`Resultado da multiplicação: ${resultado}`)
            break;
        case '4':
            if (num2 != 0) {
                resultado = num1 / num2;
                console.log(`Resultado da divisão: ${resultado}`);
            } else{
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        }
    }

    if (tipoCalculadora === '2') {
        const operacao = await perguntar("Qual operação você deseja realizar? (resto 1, exponenciação 2): ");

        const num1 = await perguntarNumero("Digite o primeiro número: ");
        const num2 = await perguntarNumero("Digite o segundo número: ");
        let resultado:number;
        switch (operacao) {
        case '1':
            resultado = num1 % num2;
            console.log(`Resultado da operação: ${resultado}`)
            break;
        case '2':
            resultado= num1 ** num2;
            console.log(`Resultado da operação: ${resultado}`)
            break;
    }}

    if (tipoCalculadora === '3') {
        const numero = await perguntarNumero("Digite um número para ver a tabuada: ");
        tabuada(numero);
    }
    const continuarResposta = await perguntar("Deseja continuar? (s/n): ");
    if (continuarResposta.toLowerCase() !== 's') {
        continuar = false;
        console.log("Obrigado por usar a calculadora!");
    }
  }
    
    
}

main();
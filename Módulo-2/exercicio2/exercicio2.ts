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

async function listaCompras(): Promise<void> {
    let continuar: boolean = true;
    let lista: string[] = [];
    while (continuar){
        const operacao = await perguntar("Qual operação você deseja realizar? (1- Adicionar Item) (2- Remover Item) (3- Listar Itens): ");
        if (operacao === '1') {
            const item = await perguntar("Digite o nome do item a ser adicionado: ");
            
            if (lista.includes(item)) {
                console.log(`O item "${item}" já está na lista de compras.`);
            }else{
                lista.push(item);
                console.log(`Item "${item}" adicionado à lista de compras.`);
        }
        }  else if (operacao === '2') {
            const remover = await perguntar("Digite o nome do item a ser removido: ");
            
            if (lista.includes(remover)) {
                lista = lista.filter(item => item !== remover);
                console.log(`Item "${remover}" removido da lista.`);
            } else {
                console.log(`Item "${remover}" não encontrado.`);
            }

        } else if (operacao === '3') {
           
            if (lista.length === 0) {
                console.log("A lista de compras está vazia.");
            } else {
                console.log("Itens na lista de compras:");
                lista.forEach((item, index) => {
                    console.log(`${index + 1}. ${item}`);
                });
        }
        const continuarResposta = await perguntar("Deseja continuar? (s/n): ");
        if (continuarResposta.toLowerCase() !== 's') {
                continuar = false;
            console.log("Obrigado por usar a calculadora!");
        }
    }
    }
    
  
}




async function main() {
    const nome = await perguntar("Qual é o seu nome? ");
    console.log(`Bem-vindo, ${nome}!`);

    console.log("Lista de Compras:");
    await listaCompras();
    
    
    
}

main();
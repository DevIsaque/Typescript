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

type Carro = {
    id: number;
    marca: string;
    modelo: string;
    valor: number;
    ano: number;
}

let estoque: Carro [] = [
    {id: 1, marca: 'Ford', modelo: 'Mustang', valor: 750000, ano: 2024},
    {id: 2, marca: 'Chevrolet', modelo: 'Camaro', valor: 600000, ano: 2023},
    {id: 3, marca: 'Porsche', modelo: '911', valor: 1200000, ano: 2022},
    {id: 4, marca: 'Mitsubish', modelo: 'Lancer', valor: 400000, ano: 2021},
];




async function listarCarros(): Promise<void>{
    console.log('Bem vindo a nossa loja de carros')
    const perguntaEstoque: string = await perguntar('Deseja ver o estoque de carros? (sim/não) ');
    if(perguntaEstoque.toLowerCase() === 'sim'){
        estoque.forEach(carro => {
        console.log(`ID: ${carro.id} -
             Marca: ${carro.marca} - 
             Modelo: ${carro.modelo} - 
             Valor: R$ ${carro.valor} - 
             Ano: ${carro.ano}`);
        })
    }else if(perguntaEstoque.toLowerCase() === 'não'){
        console.log('Obrigado por visitar a nossa loja de carros')
    }else {
        console.log('Resposta Invalida')
    }
}

async function compraCarro(): Promise<void>{
    
    

    const dinheiro = await perguntar('Quanto deseja depositar?');
    const dinheiroFloat = parseFloat(dinheiro);
    if (dinheiroFloat > 0) {
        console.log('Você depositou R$ ' + dinheiroFloat);
    }else {
        console.log('Aceitamos apenas valores maiores do que 0');
    }

    await listarCarros();

    const perguntaCompra: string = await perguntar('Deseja comprar qual carro?');
    const carroId: number = parseInt(perguntaCompra);
    const carroEscolhido: Carro = estoque.find(carro => carro.id === carroId)!;
    

    if( dinheiroFloat >= carroEscolhido.valor ){
        console.log(`Você comprou o ${carroEscolhido.modelo}!`)
    }else{
        console.log('Você não tem dinheiro suficiente para comprar esse carro')
    }
    
}

async function main(){
    const nome: string = await perguntar('Qual é o seu nome? ');
    console.log(`Bem vindo ${nome}!`);
    await compraCarro();
}

main();


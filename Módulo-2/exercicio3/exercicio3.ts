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

function validarCPF(cpf: string): boolean {
  return /^\d{11}$/.test(cpf); 
}

function validarCNPJ(cnpj: string): boolean {
  return /^\d{14}$/.test(cnpj); 
}

function validarRG(RG: string): boolean {
  return /^\d{9}$/.test(RG); 
}

type Documento = (
  | { tipo: 'CPF'; numero: string }
  | { tipo: 'CNPJ'; numero: string }
  | { tipo: 'RG'; numero: string }
);

const documentosValidados: Documento[] = [];

async function validacaoDocumento(): Promise<void> {
    let continuar: boolean = true;
    while (continuar) {
        const perguntaTipo = await perguntar("Qual tipo de documento você deseja validar? (CPF/CNPJ/RG): ");
        let documento: Documento;

        if (perguntaTipo === 'CPF') {
            const numero = await perguntar("Qual é o CPF que você deseja validar? ");
            documento = {tipo: 'CPF', numero};
        
            if (validarCPF(numero)) {
                console.log(`O CPF ${numero} é válido.`);
            } else {
                console.log(`O CPF ${numero} é inválido.`);
            }

            documentosValidados.push(documento);

        } else if (perguntaTipo === 'CNPJ') {
            const numero = await perguntar("Qual é o CNPJ que você deseja validar?")
            documento = {tipo: 'CNPJ', numero};
            if (validarCNPJ(numero)) {
                console.log(`O CNPJ ${numero} é válido.`);
            } else {
                console.log(`O CNPJ ${numero} é inválido.`);
            }

            documentosValidados.push(documento);

        } else if (perguntaTipo === 'RG') {
            const numero = await perguntar("Qual é o RG que você deseja validar? ");
            documento = {tipo: 'RG', numero};
            if (validarRG(numero)) {
                console.log(`O RG ${numero} é válido.`);
            } else {
                console.log(`O RG ${numero} é inválido.`);
            }

            documentosValidados.push(documento);

        }
        const verDocumentos = await perguntar("Deseja ver os documentos validados? (s/n): ");
        if (verDocumentos.toLowerCase() === 's') { 
                documentosValidados.forEach(doc => {
                console.log(`${doc.tipo}: ${doc.numero}`); // Doc 
            })
            
        } else {
            console.log("Nenhum documento validado.");
        }
        const continuarResposta = await perguntar("Deseja continuar? (s/n): ");
        if (continuarResposta.toLowerCase() !== 's') {
                continuar = false;
            console.log("Até logo!");
        }
        
    }
}




async function main() {
    const nome = await perguntar("Qual é o seu nome? ");
    console.log(`Bem-vindo, ${nome}!`);

    await validacaoDocumento();
    
}

main();
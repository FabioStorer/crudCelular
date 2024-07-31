const prompt = require('prompt-sync')();
const celulares = [];

const modelo = () => {

    const donoCelular = prompt('Digite o nome do dono do celular: ');
    const modeloCelular = prompt('Digite o modelo do celular: ');
    const marcaCelular = prompt('Digite a marca do celular: ');
    const cpuCelular = prompt('Digite qual cpu o celular possui: ');
    const ramCelular = prompt('Digite quanto de memória RAM o celular possui: ');
    const memoriaCelular = prompt('Digite quanto de memória o celular possui: ');
    const cameraCelular = prompt('Digite quantas câmeras o celular possui: ');

    if (donoCelular != '' && modeloCelular != '' && marcaCelular != '' && cpuCelular != '' &&
        ramCelular > 0 && memoriaCelular > 0 && cameraCelular > 0) {
        return {
            donoCelular,
            modeloCelular,
            marcaCelular,
            cpuCelular,
            ramCelular,
            memoriaCelular,
            cameraCelular
        };
    }

    console.log('Dados inválidos!');
};

const criar = () => {

    const novo = modelo();

    if (novo) {
        celulares.push(novo);
        console.log('Celular cadastrado com sucesso!');
    }
};

const listar = () => {

    if (celulares.length == 0) {
        console.log('Nenhum celular cadastrado.');
    }

    celulares.forEach((el, index) => {
        console.log(`${index + 1},
        Dono do celular: ${el.donoCelular}
        Modelo do celular: ${el.modeloCelular}
        Marca do celular: ${el.marcaCelular}
        CPU do celular: ${el.cpuCelular}
        RAM do celular: ${el.ramCelular}
        Memória do celular: ${el.memoriaCelular}
        Câmeras do celular: ${el.cameraCelular}`);
    });
};

const atualizar = () => {

    listar();

    const index = prompt('Escolha pelo índice qual cadastro deseja atualizar: ') - 1;
    const novo = modelo();

    if (novo && index >= 0 && index < celulares.length) {
        celulares[index] = novo;
        console.log('Celular atualizado com sucesso!');
    } else {
        console.log('Índice inválido!');
    }
};

const remover = () => {

    listar();

    const index = prompt('Escolha pelo índice qual cadastro deseja remover: ') - 1;

    if (index >= 0 && index < celulares.length) {
        celulares.splice(index, 1);
        console.log('Cadastro removido com sucesso!');
    } else {
        console.log('Índice inválido!');
    }
};

module.exports = {
    criar,
    listar,
    atualizar,
    remover
};
const prompt = require('prompt-sync')();
const funcao = require('./module.js');

while (true) {

    console.log(`Escolha uma opção abaixo: 
    1. Cadastrar
    2. Listar
    3. Atualizar
    4. Remover
    5. Finalizar`);
    const opcao = Number(prompt(''));

    switch (opcao) {

        case 1:

            funcao.criar();

            break;

        case 2:

            funcao.listar();

            break;

        case 3:

            funcao.atualizar();

            break;

        case 4:

            funcao.remover();

            break;

        case 5:

            process.exit();

            break;

        default:

            console.log('Opção inválida!');

            break;
    }

};
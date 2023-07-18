//Atribuição via desestruturação ( OBJETOS )

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fernandes',
    idade: 30,
    endereco: {
        rua: 'Rua Antonio Quirino',
        numero: 50
    }
};

//Atribuição via destruturação
// const { nome, sobrenome, idade, endereco } = pessoa;
// const { endereco: {rua: r = 12345, numero}, endereco } = pessoa;
const {nome, ...resto } = pessoa;
console.log(nome, resto);
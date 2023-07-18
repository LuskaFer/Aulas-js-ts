// For in - Estrutura de repetição 
// For in -> lê os índices ou chaves do objeto 
//                0        1      2
// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let index in frutas) {
//     console.log(index, frutas[index]);
// }

//  for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
//  }

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Godoy',
    idade: 26
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa ){
    console.log(chave, pessoa[chave]);
}
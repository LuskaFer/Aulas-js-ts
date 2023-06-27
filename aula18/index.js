//Objetos

let array = [1,2,3];
array.push(4);
array[0] = 'Luska';

console.log(array);

array = 'Outra';

console.log(array);

const nome01 = 'Luska';
const sobrenome01 = 'Fenandes';
const idade01 = 26;

const nome02 = 'Zeca';
const sobrenome02 = 'Pagodinho';
const idade02 = 58;

const pessoa3 = {
 nome: 'Lucas',
 sobrenome: 'Godoy',
 idade: 26
};

console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa3.idade);

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa01 = criaPessoa('Luscas', 'Fernandes', 26);
console.log(pessoa01.nome);

function criaPessoa1 (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa02 = criaPessoa1('Marquinhos', 'Fernandes', 26);
console.log(pessoa02.nome);

const pessoa03 = {
    nome: 'Juno',
    sobrenome: 'Marcelo',
    idade: 43,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi... minha idade é ${this.idade}.`);
    },

    incrementaIdade(){
       this.idade++;
    }

};

pessoa03.fala();
pessoa03.incrementaIdade();
pessoa03.fala();
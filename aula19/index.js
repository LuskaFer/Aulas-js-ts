// Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor
// São valores compiados 
//          01234
let nome = 'Lucas';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);


// Referência (mutável) - array, object, function 
// São valores passados por referência ( apontam para mesmo valor na memória )
let c = [1, 2, 3];
let d = [...c]; // o valor será passado para dentro do b e não mudará 
let e = d;

console.log(c, d);

c.push(5)
console.log(c, d);

d.pop();
console.log(c, d);

c.push('Luiz');
console.log(c, e);

const a1 = {
    nome: 'Luiz',
    cobrenome: 'Otávio'
};

const b1 = {...a1};

a1.nome ='João';
console.log(a1, b1);

// Array é uma suposta lista de coisa com indexação por elemento e 
// n por caractere ou numero (tbm é considerado um objeto)

const alunoss = ['Lucas', 'Maria', 'Joao', 1, true, null]; // array aceita varias coisas ( n eh uma boa pratica)
console.log(alunoss);

const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]); // exibir pela indexação.

alunos[0] = 'Eduardo'; // alterar um elemento 
console.log(alunos);

alunos[3] = 'Luiza'; // adicionar um elemento no array 
console.log(alunos);

console.log(alunos.length); // tamanho do array 

alunos[alunos.length] = 'Fábio'; // adicionar des do ultimo elemento conhecido ate o  momento
alunos[alunos.length] = 'Luana';
console.log(alunos);
console.log(alunos.length); 

alunos.push('Otávio'); // função que adiciona ao final 
console.log(alunos);
console.log(alunos.length);

alunos.unshift('Juninho'); // função que adiciona no começo
console.log(alunos);
console.log(alunos.length);

alunos.pop(); // remove o ultimo item do array // tambem pode salvar o removido 
console.log(alunos);
console.log(alunos.length);

const alunoRemovido = alunos.pop(); // exemplo
console.log(alunoRemovido);
console.log(alunos);
console.log(alunos.length);

alunos.shift(); // remove o primeiro item do array // tambem pode salvar o removido 
console.log(alunos);
console.log(alunos.length);

const alunoRemovido2 = alunos.shift(); // exemplo
console.log(alunoRemovido2);
console.log(alunos);
console.log(alunos.length);

//delete alunos [1]; remove um item e o indice dele e deixa um empty no lugar.
console.log(alunos);

console.log(alunos[50]); // devolve undefined pq n existe 

console.log(alunos.slice(0, 3)); //divide e mostra entre o valor definido de indice
console.log(alunos.slice(0, -2));

console.log(typeof alunos); // mostrando o type (objeto)
console.log(alunos instanceof Array); // mostrando se é uma instancia de array
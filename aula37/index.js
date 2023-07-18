// For of - Estrutura de Repetição

//            01234...
const nomes = ['Lucas', 'Fernandes', 'Godoy']

//For classico 
for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i]);
}

console.log('####################') // divisão visual 

// For in 
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####################') // divisão visual 

// For of 
for (let valor of nomes) {
    console.log(valor);
}

console.log('####################') // divisão visual 

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// RESUMO
// For clássico - Geralmente com iteráveis ( array ou strings )
// For in - Retorna o índice ou chave ( string, arrays ou objetos )
// For of - Retorna o valor em si ( iteráveis, arrays ou strings )

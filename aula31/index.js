// diferenças var, let e const 

const verdadeira = true;

// // Let tem escopo de bloco { .... bloco }
// // Var só tem escopo de função 

// let nome = 'Lucas' // Criando 
// var nome2 = 'Lucas'; // Criando 

// if (verdadeira) {
//     let nome = 'Fernandes'; // Criando 
//     var nome2 = 'Juninho'; // Redeclarando 
//     // console.log(nome,nome2);
    
//     if (verdadeira) {
//         var nome2 = 'Ronaldo';
//         let nome = 'Outra coisa';
//         // console.log(nome, nome2);
//         }


// }

// console.log(nome, nome2);

// A função priva suas variaveis, porem pega as 
// do escopo global ( se n for uma let que tem escopo de bloco...)

// function falaOi () {

//     if (verdadeira) {
//         let nome = 'Lucas';
//         var sobrenome = 'Godoy';
//     }

//     console.log(sobrenome);


// }

// falaOi();

console.log(sobrenome);

var sobrenome = 'Fernandes';

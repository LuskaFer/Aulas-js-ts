let num1 = 9.54578;
//let num2 = Math.floor(num1); // erredonda pra baixo 
//let num2 = Math.ceil(num1); // arredonda pra cima 
//let num2 = Math.round(num1); // arredonda automaticamente 
//console.log(num2);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // pega o maior numero da sequencia 
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // pega o menor numero da sequencia 

//console.log(Math.random()); // gera números aleatórios.

//const aleatorio = Math.random() * (10 - 5) + 5; // numero aleatório entre 10 e 5 
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // numero aleatório entre 10 e 5 arrendondando.
console.log(aleatorio);

console.log(Math.PI); // numero do PI

console.log(Math.pow(2, 10)); // elevação
console.log(2 ** 10); // com operador

let nu1 = 9;

console.log(nu1 ** (1/2)); // com operador raiz quadrada 

console.log(100 / 0); // JS tem infinity e é verdadeiro (true)


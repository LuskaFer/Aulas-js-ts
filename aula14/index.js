let num1 = 10.4738743 //number
let num2 = 2.5 //number 

console.log (num1.toString() + num2); // tranformo em string (dentro da opreção console.log) e concatenou.
// num1 = num1.toString(); //transformar mesmo 

console.log(num1.toString(2)); // tranformar em binário

console.log(num1.toFixed(2)); // fixed quantidade de casas decimais 

console.log(Number.isInteger(num1)); // ver se é um numero inteiro retorna boolean 

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // ver se é um NaN 

// IEEE 754-2008 (Padrão dos numeros no JS) (existe uma imprecisão)

let num01 = 0.7 
let num02 = 0.1

console.log(num01 + num02); // exemplo da imprecisão 

//let num011 = 0.7 
//let num022 = 0.1

//num011 += num022; // 0.8
//num011 += num022; // 0.9
//num011 += num022; // 1.0

// num011 = num011.toFixed(2); // supostamente arrumaria mas n arruma.

//console.log(num011);
//console.log(Number.isInteger(num011)); // não resolve

let num011 = 0.7 
let num022 = 0.1

num011 = parseFloat(num011.toFixed(2)); // agora sim resolve ( pode ser Number tbm)

console.log(num011);
console.log(Number.isInteger(num011)); // prova

num011 += num022; // 0.8
num011 += num022; // 0.9
num011 += num022; // 1.0
num011 += num022; // 1.1
num011 += num022; // 1.2
num011 += num022; // 1.3
num011 += num022; // 1.4
num011 += num022; // 1.5
num011 += num022; // 1.6
num011 += num022; // 1.7
num011 += num022; // 1.8
num011 += num022; // 1.9
num011 += num022; // 2.0

console.log(num011); // funciona porem existe imperfeições ainda como o "4"

let nu1 = 0.7; // number
let nu2 = 0.1; // number
//nu1 = ((nu1 * 100) + (nu2 * 100)) / 100; // 0.8
//nu1 = ((nu1 * 100) + (nu2 * 100)) / 100; // 0.9
//nu1 = ((nu1 * 100) + (nu2 * 100)) / 100; // 1.0

nu1 = Number(nu1.toFixed(2)); // resolve se n for pra mais ações
console.log(nu1.toFixed(2)); // resolve so pra mostrar pro client

console.log(Number.isInteger(nu1)); // Assim se resolve certinho !

/*
Lucas Fernandes Godoy tem 26 anos (hoje fiz aniversário dia 22/05/2023 ), pesa 69 kg
tem 1.8 de altura e seu IMC é de xxxx
Lucas Fernandes Godoy nasceu em 1997
*/
const nome = 'Lucas';
const sobrenome = 'Fernandes';
const idade = 26;
const peso = 69;
const alturaEmMetros = 1.80;
let indiceMassaCorporal; // peso / (altura* altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2023 - idade;

// template strings 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
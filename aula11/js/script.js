alert('Com a nossa mensagem.'); 
// chama objeto window no navegador.
// e retorna undefined de padrão.
confirm('Deseja realmente confirmar ?');
// retorna boolean true or false 
prompt('Digite algo');
// retorna oque foi escrito 

let confirma = confirm('Deseja realmente confirmar mesmo ?');
console.log(confirma);

let num1 = prompt('Digite um número');
console.log(num1); // retorna string

let num2 = prompt('Digite outro número');
console.log(num2); // retorna string 

console.log(num1 + num2); // concatenar e n somar por ser strings 

num1 = parseFloat(num1);
num2 = Number(num2);

console.log(num1 + num2); // agora funciona pq o type foi tratado 

console.log(typeof num1);
console.log(typeof num2);

const resultado = num1 + num2;
alert(`O resultado da soma dos dois números foi:  ${resultado}`);
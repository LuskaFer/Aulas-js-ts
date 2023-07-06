/* Operadores lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar "true"

|| -> OR -> OU -> Precisa de apenas uma expressão verdadeira para retornar "true"

! -> NOT -> NÃO -> Força a inversão do valor


*/
const expressaoAnd = true && true && true && true;

const expressaoOR = true || false;

console.log(expressaoOR);

const usuario = "Lucas"; // form user digitou 
const senha = "54321";   // form user digitou 

const vaiLogar = usuario === "Lucas" && senha === '54321';
console.log(vaiLogar);

console.log(!false);

console.log(!!false);
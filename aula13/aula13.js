// strings são indexadas e tem um indice..
//               0123456
let umaString = 'um txto';
let umaString1 = "um \"txto\""; // barra invertida vira "escape"
console.log(umaString);
console.log(umaString1);

console.log(umaString1[4]);// seleciona um posição 

console.log(umaString1.charAt(6));// mostra o elemento na posição selecionada

console.log(umaString1.concat(' em', ' um', ' lindo dia.')); // concatena alguma coisa 
console.log(umaString1 + ' em um lindo dia.'); // funciona igual
console.log(`${umaString1} em um lindo dia.`); // tbm

console.log(umaString1.indexOf('txto')); // mostra a posição do texto escrito.

console.log(umaString1.indexOf('txto', 3)); // começa a procurar do indice informado.

console.log(umaString1.lastIndexOf('txto', 6)); // começa a procurar do indice informado de traz pra frente.

console.log(umaString1.match(/[a-z]/g));// mostra todos os caracteres usando expressão regular.

console.log(umaString1.search(/x/));// pesquisa os caracteres usando expressão regular. ( no caso o "x" dentro do texto)

console.log(umaString1.replace('um', 'Outro')); // Substitui o texto ( aceita expressão regular tbm).

let umaString2 = "A ratazana roeu a roupa da rainha de roma.";
console.log(umaString2.replace(/r/g, '@')); // se usado o "g" repete para todos os casos.

console.log(umaString2.length); // fala o tamanho da string. 

console.log(umaString2.slice(-5,-1)); // pega um pedaço conforme definido. ( aceita numero negativo)

console.log(umaString2.substring(umaString2.length - 5, umaString2.length - 1)); // mesma coisa do slice porem mais extenso de digitar.

console.log(umaString2.split('', 2)); // divide o texto pelo caractere sugerido.

console.log(umaString2.toUpperCase()); // deixa em caixa alta os caracteres 

console.log(umaString2.toLowerCase()); // deixa em caixa baixa.


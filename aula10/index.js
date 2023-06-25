// String, number, undefined, null, boolean, symbol < - será visto posteriormente 
const nome = 'Lucas'; //String 
const nome1 = "Lucas"; //String 
const nome2 = `Lucas`; //String 
const num1 = 10; //number
const num2 = 10.52; //number 
let nomeAluno; //undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

/**
 *          Operadores Aritméticos:
 * 
 *  '+'     Adição / Concatenação
 *  '-'     Subtração 
 *  '/'     Divisão
 *  '*'     Multiplicação
 *  '**'    Potenciação
 *  '%'     Resto da divisão
 * 
 *          Precedencia:
 *  '()'    '**'    '*'     '/'     '%'     '+'     '-' 
 * 
 *          Incremento: '++'    /       Decremento = '--'
 * 
 *          NaN = Not a number
 */
const nume1 = 5;
const nume2 = 10;

//testador
console.log(nume1 - nume2);

let contador = 1;

// contador++; // primeiro a conta depois valor 
// ++contador; // primeiro ação depois incremento 

console.log(++contador);

// Aplicável com "++" & "--"

const passo = 5;
let contador1 = 0;


contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);

// da pra fazer assim:

contador1 += passo; // contador1 = contador1 + passo
console.log(contador1);
contador1 *= passo;
console.log(contador1);
contador1 **= passo;
console.log(contador1);
contador1 -= passo; 
console.log(contador1);



const nu1 = 10;
const nu2 = parseInt('5'); // parseInt converte para Inteiro. 
const nu3 = parseFloat('5.2'); // parseFloat tranforma em número com casas decimais.
const nu4 = Number('5.2'); // Transforma em number e detecta "tipagem".
console.log(nu1 + nu2);
console.log(typeof nu2);
console.log(nu1 + nu3);
console.log(typeof nu3);
console.log(nu1 + nu4);
console.log(typeof nu4);





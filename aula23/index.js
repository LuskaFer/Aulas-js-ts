/*

&& -> false && true -> false "o valor mesmo"

|| -> vai retornar "o valor verdadeiro"


false ( literal )
FALSY
0
'' " " ``
null / undefined
NaN
*/

// AND && 

console.log('Lucas Fernandes' && true && '');


function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Luquinha';

console.log(vaiExecutar && falaOi());

//---------------------------------------------------------------------

// || OR

console.log(0 || false || null || 'Lucas Godoy' || true);

const corUsuario = 'azul';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // é uma string n um boolean (pegadinha)
const d = false;
const e = NaN;

console.log(a || b || c || d || e);


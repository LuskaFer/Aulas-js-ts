//Funções
//               (metódo)
function saudacao(nome) {
    return `Boa tarde ${nome}!`;
}
//                       (argumento)    
const variavel = saudacao('Lucas');
console.log(variavel);

function soma (x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

const metade = (n) => {
    return n / 2;
};

console.log(metade(10));

const dobro = n => n * 2;

console.log(dobro(3));
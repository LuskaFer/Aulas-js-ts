// Retorno da função 
// return:
// Retorna um valor
// Termina a função 

function soma(a, b){
    return a + b ;
}

function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome
    };
}

const p1 = criaPessoa('Lucas', 'Fernandes');
const p2 = {
    nome: 'Lucas',
    sobrenome: 'Godoy'
};

console.log(p1);
console.log(p2);

console.log(typeof p1);
console.log(typeof p2);

// exemplo de return 

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!')
console.log(resto);



function criaMutiplicador(multiplicador){
    // multiplicador está nesse escopo 
    return function(n) {
        return n * multiplicador;
    };
}
  
const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);
const quadriplica = criaMutiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
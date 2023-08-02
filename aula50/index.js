// Parâmetros da função 
function funcao() {
    console.log(arguments[0]); // para selecionar os argumentos enviados 
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// argumentos que sustenta todos os argumentos enviados 
function funcao1(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao1(1, 2, 3, 4, 5, 6, 7);


// Quando divergir numero de argumento com parametros n vai dar erro, só vai dar undefined
function funcao2(a, b, c, d, e, f) { // parametros 
     console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3); // argumentos 

// forma antiga de quando falta argumentos 

function funcao3(a, b){
    b = b || 0;
    console.log(a + b);
}
funcao3(2);

// forma atual 

function funcao4(a, b = 2, c = 4){
    console.log(a + b + c);
}
funcao4(2, undefined, 10);

// atribuição via desestruturação 

function funcao5({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao5({ nome: 'Lucas', sobrenome: 'Fernandes', idade: 26 });

// tbm da pra fazer 

function funcao6({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Lucas', sobrenome: 'Fernandes', idade: 26 }
funcao6(obj);

// e tbm 

function funcao7([ valor1, valor2, valor3 ]){
    console.log(valor1, valor2, valor3);
}

funcao7(['Lucas Fernandes', 'Godoy', 26]);

// exemplo 01

function conta(operador, acumulador, ...numeros){ //usando o rest operator 
    console.log( operador, acumulador, numeros);
    for(let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

//exemplo 02 com function expression 

const conta1 = function(operador, acumulador, ...numeros){ //usando o rest operator 
    console.log( operador, acumulador, numeros);
    for(let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta1('+', 0, 20, 30, 40, 50);

// ARGUMENTS N FUNCIONA EM ARROW FUNCTION !!!
// mas pode usar o rest operator para o mesmo...

const conta2 = (...args) => {
    console.log(args);
};
conta2(1, 2, 3, 4)
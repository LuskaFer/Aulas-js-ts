// As várias maneiras de declarar funções em JavaScript 

// Declaração de função ( Function hoisting )

falaOi();

function falaOi() {
    console.log('Oi');
}

// First-class objects ( Objetos de primeira classe) 
// Function expression 
const souUmDado = function nomeDaFuncao() { //Tbm pode nomeara func mas n é visto com frequencia... 
    console.log('Sou um dado');
};

souUmDado();

// Executando uma função dentro de outra função por objeto de primeira classe:
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo: ')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto tbm posso ter uma função 
const obj = {
    falar: function() {
        console.log('Estou falando....')
    }
};
obj.falar();

// e pode ser abreviado...

const obj2 = {
    falar2(){
        console.log('Estou falando....2')
    }
};
obj2.falar2();

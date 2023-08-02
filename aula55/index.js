// Funções imediatas (IIFE)
// IIFE -> Imeddiately invoked function expression 

(function(idade, peso, altura){

    const sobrenome = 'Godoy';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);


})(26, 71, 1.82);

const nome = 'Qualquer coisa';

console.log(nome);
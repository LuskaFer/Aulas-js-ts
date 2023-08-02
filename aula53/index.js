// Closures - é a habilidade de acessar os escopos léxicos 
// Essa função tem acesso a 3 escopos, o dela o da mae e o global 
function retornaFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Fernandes');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
// Funções construtoras ( constructor functions ) -- > constroi objetos 
// função fabrica -> fabrica objetos 
// Construtora -> Pessoa (new)
// a palavra "new" já cria um obejto vazio e direciona ao this sem precisar escrever o return 


function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function() {

    };

    // Atributos ou métodos publicos 
    this.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método')
    };

}

const p1 = new Pessoa ('Lucas', 'Fernandes');
const p2 = new Pessoa ('Maria', 'Joaquina');

console.log()
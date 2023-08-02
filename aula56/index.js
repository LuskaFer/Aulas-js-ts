// Funções fábrica ( Factory Functions )

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;

        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'Falando sobre Nada.') {
            return `${this.nome} está ${assunto}.`; // this.nome = p1.nome // this -> é sempre quem chamar o objeto
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() {                         // adicionar o "get" faz com que se torne um atributo 
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Fernandes', 1.82, 70);
// console.log(p1.imc);
// console.log(p1.fala('falando sobre JavaScript'));
// console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Junin Doidera Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

// const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 52);
// console.log(p2.imc);

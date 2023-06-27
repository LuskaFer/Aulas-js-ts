function meuEscopo () {
    // primeiro passo foi bloquear o refresh automatico da página para n se perder os valores.

    const form = document.querySelector('.form'); // nome da tag = 'form' class '.form' id '#form'
    const resultado = document.querySelector('.resultado');
//    form.onsubmit = function (evento) { // sempre que o sinal "=" for usado, deve por ";".
//        evento.preventDefault();
//    };

    const pessoas = [];


//    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
//        console.log(`Form não enviado ${contador}`);
//       contador++;
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ` +
        `${altura.value} </p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
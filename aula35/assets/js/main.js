// Exercício com For e Atribuição via desestruturação

const elementos = [
    {tag: 'p', texto: 'Qualquer coisa.'},
    {tag: 'div', texto: 'Qualquer coisa 2.'},
    {tag: 'section', texto: 'Qualquer coisa 3.'},
    {tag: 'footer', texto: 'Qualquer coisa 4.'},

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
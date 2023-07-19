// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (height, width) => width > height ? true : false; 
console.log(ePaisagem(10, 20));

console.log('#####################################01');

function ePaisagem1(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem1(1920, 1080));

console.log('#####################################02');

const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1080, 1920));
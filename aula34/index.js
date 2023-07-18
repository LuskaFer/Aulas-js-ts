// For - Clássico - Estrutura de repetição 
// console.log ('linha 0');
// console.log ('linha 1');
// console.log ('linha 2');
// console.log ('linha 3');
// console.log ('linha 4');
// console.log ('linha 5');


// i - index 
// for (let i = -400; i <= 500; i += 25 ) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 50; i >= 40; i -= 2 ) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 0; i <= 10; i++ ){
//     const par  = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, par);
// }

const frutas = ['Maça', 'Pêra', 'Uva', 'Manga', 'Açai', 'Guaraná'];

console.log(frutas.length);

for (let i = 0; i < frutas.length; i ++){
    console.log(`Índice ${i}`, frutas[i]);
}
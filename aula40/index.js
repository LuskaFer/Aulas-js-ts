//Break e Continue 
// continue continua para próxima iteração
// break sai do laço 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for ( let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7){
        console.log('número 7 encontrado, saindo...')
        break;
    }
}

console.log('####################################') // divisor 

let i = 0;
while ( i  < numeros.length) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o número 2');
        i++; // sempre executar a variavel de controle antes do 'continue' & ' break'
        continue;
    }

    console.log(numero);

    if (numero === 7){
        console.log('número 7 encontrado, saindo...')
        i++; // sempre executar a variavel de controle antes do 'continue' & ' break'
        break;
    }

  i++;
}
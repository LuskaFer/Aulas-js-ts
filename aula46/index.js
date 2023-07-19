// setInterval e setTimeout 

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hora12: false
    });
}

// function funcaoDoInterval(){
//     console.log(mostraHora());
// }
// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function () { //function anonima 
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function() {
    console.log('Olá Mundo! ')
}, 5000);
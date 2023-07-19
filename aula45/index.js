// Tratando e lançando erros (try, catch, finally)
try {
    // É executado quando não há erros 
} catch (e) {
    // É executado quando há erros 
} finally {
    // Sempre é executado 
}

try {
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro'); // apartir do erro ele pularia 
    // pro catch e n executaria mais nada embaixo 
    console.log('Fechei o arquivo')

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro')
    } finally {
        console.log('Também serei executado pq sou finally')
    }

} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Sempre serei executado')
}


function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hora12: false
    });


}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retonaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia');
}
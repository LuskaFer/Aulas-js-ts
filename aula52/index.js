// Escopo léxico 
const nome = 'Lucas';

function falaNome(){
    
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Fernandes';
    falaNome();
}
usaFalaNome();

// a função sabe onde foi declarada e todos seus "vizinhos"
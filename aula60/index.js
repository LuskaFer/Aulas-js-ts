//Funções recursivas -> É uma função que se chama de volta
function recursiva(max) { 
    console.log(max);
    if (max >= 500) return;
    max++;
    recursiva(max);
}

recursiva(0);

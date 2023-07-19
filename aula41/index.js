//Escreva uma função que recebe 2 números e retorna o maior deles

function max(x, y) {
    if (x > y){
        return x;
    } else {
        return y;
    }
}

console.log(max(10, 2));

console.log('#############################01');

function max(x, y) {
    if (x > y) return x;
    return y;
}

console.log(max(10, 2));

console.log('#############################02');

function max(x, y) {
    return x > y ? x: y;
}

console.log(max(10, 2));

console.log('#############################03');

const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max(10, 2));

console.log('#############################04');

const max3 = (x, y) => x > y ? x : y;
console.log(max3(10, 2));
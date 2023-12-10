function x(tx) {
    console.log(tx);
}

function soma(){ 
    return 2+2;
}

x("Texto");

console.log(soma());

const arrowFunction = nome => `meu nome é... ${nome}`;

console.log(arrowFunction('Viitooor'));

const somaNumero = (num1, num2) => {
    console.log(num1 >= num2 ? 'é ou num é' : 'num é ou é');
}

somaNumero(2,3);

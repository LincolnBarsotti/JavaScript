const listaDeNumeros = [1,2,3,4,5,6];
const lista2DeNumeros = [1,2,3,4,5,6];

const numeros = listaDeNumeros.concat(lista2DeNumeros);

console.log(numeros);

// ------------------------------

const num = [lista2DeNumeros, listaDeNumeros];

console.log(num);

// ----------------------------------

const [first, second] = num;

console.log(`Primeiro array: ${first} e o segundo array: ${second}`);

// ----------------------------------

for(let i = 0; i < num.length; i++){
    console.log(num[0][i] + " -> number");
    console.log(num[1][i] + " -> number");
}


const listaDeNumeros = [1,2,3,4,5,6];
const lista2DeNumeros = [6,5,4,3,2,1];

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
    for (let j = 0; j < num[i].length; j++) {
        console.log(num[i][j] + " -> number");    
    }
}

for(let elementos of first){
    console.log(elementos);
}
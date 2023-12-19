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

second.forEach(function (a, i){
    console.log(`first parameter ${a}, second parameter ${i}`);
});

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    },0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}


console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
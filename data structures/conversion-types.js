let numero = 456;
let numeroString = '456';

console.log(numero == numeroString);
console.log(numero === numeroString);

console.log(numero + numeroString);
console.log(numero + Number(numeroString));

numeroString = Number('456');
console.log(numero + Number(numeroString));

numero = String(456);
numeroString = String(numeroString);
console.log(numeroString + numero);
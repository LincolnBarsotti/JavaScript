const texto1 = "Olá mundo!";
const texto2 = "Olá mundo!";
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = 'Lincoln enviou oi para ti';


console.log(texto1);
console.log(senha);
console.log(StringDeNumeros);
console.log(citacao);
console.log(citacao + ' e ' + texto1);
console.log('\u0024');
console.log(citacao.toLocaleUpperCase());
console.log(citacao.toLocaleLowerCase());
console.log(citacao.length);
console.log(citacao.toString());

console.log(`Maiusculo é ${citacao.toLocaleUpperCase()} e a minuscula é ${citacao.toLocaleLowerCase()}`);

const frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final';
// faz uma verificação global para utilizando do '/palavrsa-feia/g' caso não tenha o 'g', é a primeira
const fraseAtualizada = frase.replace(/palavra-feia/g, '********') ;
console.log(fraseAtualizada);

const cpf = '12345679810';
const rg = '936549878';
const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
const rgFormatado =   rg.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{1})/, "$1.$2.$3-$4");

console.log(cpfFormatado); 
// O retorno seria 256.846.770-37

console.log(rgFormatado);

console.log(rgFormatado.replace(/9/g, 't'));
//FIRST CHALLENGE

//Start-------------------------------------
// alert('Bos vindas ao nosso site!');

// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendar = 50;
// let saldoDisponivel = 1000;

// alert('Erro! Preencha todos os campos campos');

// let mensagemDeErro = 'Erro! Preencha todos os campos campos';

// alert(mensagemDeErro);

// nome = prompt('Digite seu nome')
// idade = prompt('Digite sua idade')

// if(idade >= 18) {
//     alert('Pode tirar a habilitação!')
// }
//End---------------------------------------

//SECOND CHALLENGE

//Start-------------------------------------
// let diaDaSemana = prompt('Qual o dia da semana hoje?');

// if(diaDaSemana.toLowerCase() == 'sábado' || diaDaSemana.toLowerCase() == 'domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

// //__________

// let numero = prompt('Digite um número');

// if(numero < 0) {
//     alert('O número é negativo -');
// } else {
//     alert('O número é positivo +');
// }

// //__________
// let pontuação = 40;

// if(pontuação >= 100) {
//     alert('Parabéns, você venceu!')
// } else {
//     alert('Tente novamente para ganhar.')
// }

// //_________
// let saldo = 1520.50;

// alert(`Seu saldo é ${saldo}`);

// //_________
// let nome = prompt('Digite seu nome');

// alert(`Seja bem vindo ${nome}!`)
//End---------------------------------------

//THIRD CHALLENGE

//Start-------------------------------------

// let contador = 0;

// while(contador < 10){
//     contador++;
//     console.log(contador);
// }

// contador++;

// while(contador > 1) {
//     contador--;
//     console.log(contador);
// }

// contador = prompt('Digite um número');

// while(contador > 0) {
//     console.log(contador);
//     contador--;
// }

// contador = prompt('Digite um número');
// numero = 0;

// while(numero < contador) {
//     numero++;
//     console.log(numero);
// }

//End---------------------------------------

//FORTH CHALLENGE

//Start-------------------------------------

console.log('Sejá bem vindo!');

let nome = prompt('digire seu nome');

console.log(`Olá, ${nome}!`);

alert(`Olá, ${nome}!`);

let favProgrammingLanguage = prompt('Qual a linguagem de programação que você mais gosta?');

console.log(favProgrammingLanguage);

let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Digite sua idade');

console.log(`Você é ${idade >= 18 ? 'maior' : 'menor'} de idade`);

let numero = prompt('Digite um número');

console.log(`Esse número é ${numero >= 0 ? 'positivo' : 'negativo'}`);

numero = 1;

while(numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 8;

console.log(`${nota >= 7 ? 'Aprovado' : 'Reprovado'}`);

console.log(Math.random());

console.log(parseInt(Math.random() * 10 + 1));

console.log(parseInt(Math.random() * 1000 + 1));

//End---------------------------------------
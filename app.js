alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}

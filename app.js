alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

let palavarTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavarTentativa}.`);

alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
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
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menos que ${chute}`);
        }
    }
    tentativas++;
}

if(tentativas > 1) {
    alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
} else {
    alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}

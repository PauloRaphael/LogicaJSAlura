alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute;

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    // se chute for igual ao número secreto
    chute = prompt('Escolha um numero entre 1 e 10');

    if (chute == numeroSecreto) {
        alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`)
        } else {
            alert(`O número secreto é menos que ${chute}`)
        }
    }
}
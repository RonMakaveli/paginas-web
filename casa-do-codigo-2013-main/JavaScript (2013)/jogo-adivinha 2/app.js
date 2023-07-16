var numeroPensado = Math.round(Math.random() * 1000);

var numeroTentativa = 1;
while(numeroTentativa <= numeroPensado){
    var palpite = prompt("Qual você acha que é ?");

    if(palpite == numeroPensado){
        alert("Parabéns você acertou!");
        break
    } else {
        alert("Você errou. Será que ainda tem mais tentativas ?");
    }
    numeroTentativa++;
}
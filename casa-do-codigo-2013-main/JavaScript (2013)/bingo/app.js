/* 
var adicionarSorteado = function(){
    var numero = document.getElementById("numero").value;
    for(var i = 0; i < sorteados.length; i = i + 1) {
        if(sorteados [i] == numero){
            alert("Numero já sorteado!");
            return;
        }
    }

    sorteados.push(numero); //adiciona um ou mais elementos ao final de um array.
    console.log(sorteados);
}

var botao = document.getElementById("verificar");
botao.onclick = adicionarSorteado;

*/


var sorteiaNumeros = function() {
    var loteria = [];
    while (loteria.length < 6) {
        var sorteado = Math.round(Math.random() * 60);
        var repetido = false;
        for (var i = 0; i < loteria.length; i++) {
            if (loteria[i] == sorteado) {
            repetido = true;
            }
        }
        if (!repetido) {
        loteria.push(sorteado);
        }
    }
    return loteria;
}

var perguntaNumeros = function() {
    var palpites = [];
    var i = 1;
    while (palpites.length < 6) {
        var numero = parseInt(prompt("Digite o seu palpite numero " + i + ":"));
        var repetido = false;
        for (var j = 0; j < palpites.length; j++) {
            if (palpites[j] == numero) {
          repetido = true;
            }
        }
        if (!repetido) { //se nao for repetido adiciona
            palpites.push(numero);
            i++;
        } else {
            alert("Numero repetido!");
        }

    }
    return palpites;
}

var verificarResultado = function(loteria, palpites) {
    var acertos = 0;
    for (var i = 0; i < loteria.length; i++) {
        for (var j = 0; j < palpites.length; j++) {
            if (palpites[j] == loteria[i]) {
            acertos++;
            }        
        }
    }
    return acertos;
}

var jogar = function() {
    var loteria = sorteiaNumeros();
    var palpites = perguntaNumeros();

    console.log("sorteados: " + loteria);
    console.log("palpites: " + palpites);

    var acertos = verificarResultado(loteria, palpites);
    if (acertos == 6) {
      alert("Parabens, voce ganhou!");
    } else {
      alert("Que pena, você acertou " + acertos + " numeros. tente de novo!");
    }
}

var botaoJogar = document.getElementById("jogar");
botaoJogar.onclick = jogar;
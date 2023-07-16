/* 
//Essa é a primeira versão do sorteio.

var segredos = Math.round(Math.random() * 10);
var caixaDoNumero = document.getElementById("numero");

var botaoClicado = function(){
    if(segredo == caixaDoNumero.value){
    alert("Parabéns! você acertou o numero secreto.")
    } else {
        alert("Infelizmente você errou");
    }
    caixaDoNumero.value= "";
}

var botaoAdvinhar = document.getElementById("advinhar");
botaoAdvinhar.onclick = botaoClicado;

 */

var segredos = [13, 27, 38, 41, 53, 59];
var caixaNumero = document.getElementById("numero");

var botaoClicado = function(){
    for(var i = 0; i < segredos.length; i = i + 1){
        if(segredos[i] == caixaNumero.value){
            alert("Parabéns! você acertou um dos números secretos");
            return;
        }
    }
    alert("Infelismente você errou!");
}

var botaoAdvinhar = document.getElementById("advinhar");
botaoAdvinhar.onclick = botaoClicado;
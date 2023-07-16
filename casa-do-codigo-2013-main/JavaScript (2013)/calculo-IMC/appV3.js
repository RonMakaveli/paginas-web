var pulaLinha = function(){
    document.write("<br>");
}

var mostra = function(frase){
    document.write(frase);
    pulaLinha();
}

var calculaIMC = function(altura, peso){
    var imc = peso / (altura * altura);
    return Math.round(imc);
}

var nomeUsuario = prompt("Olá, Qual seu nome ?");
var alturaUsuario = prompt("Olá, " + nomeUsuario + " Qual é a sua altura ?");
var pesoUsuario = prompt("Certo " + nomeUsuario + ", agora me diz o seu peso:");

var imcUsuario = calculaIMC(alturaUsuario, pesoUsuario);

    if(imcUsuario < 18.5){
        mostra("Seu IMC indica que você está abaixo do peso.");
    }
    else if(imcUsuario > 35){
        mostra("Seu IMC indica que você está acima do peso");
    }
    else if(imcUsuario >= 18.5 && imcUsuario <= 35){
        mostra("Seu IMC está entre os dois limites");
    }


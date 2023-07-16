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

var peso = 120
var altura = 1.90

mostra("Meu IMC é: " + calculaIMC(altura, peso));
mostra("Ainda estou " + (calculaIMC(altura, peso) - 18.5) + " pontos acima do limite de magreza.");
mostra("Entretando estou " + (calculaIMC(altura, peso) + 35) + " pontos distante da obesidade severa.");




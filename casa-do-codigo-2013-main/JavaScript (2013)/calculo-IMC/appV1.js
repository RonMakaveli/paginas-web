var pulaLinha = function() {
    document.write("<br>");
}

var mostra = function(frase){
    document.write(frase);
    pulaLinha();
};

var peso = 120;
var altura = 1.90;
var imc = peso / (altura * altura);

mostra("Meu IMC é: " + Math.round(imc));

//Mas e se agora precisarmos calcular o IMC de seu primo?

var pesoPrimo = 83;
var alturaPrimo = 1.76;
var imcPrimo = pesoPrimo / (alturaPrimo * alturaPrimo);

mostra("O imc do meu primo é: " + Math.round(imcPrimo));

/* A fórmula continua sendo a mesma. Quando temos código sendo repetido
devemos sempre pensar na possibilidade de criar uma função. */

var calculaIMC = function(altura, peso){
    var imcFunc = peso / (altura * altura);
    mostra("IMC Calculado é: " + Math.round(imcFunc));
};

var pesoPrima = 75;
var alturaPrima = 1.60;
calculaIMC(alturaPrima, pesoPrima);

/* Em vez disso, podemos fazer com que a calculaIMC não mostre o IMC e, como
o nome diz, apenas calcule seu valor, retornando-o para quem a chamou. */

var calcularIMC = function(altura, peso){
    var imcFunct = peso / (altura * altura);
    return Math.round(imcFunct);
};

var pesoTio = 140;
var alturaTio = 1.98;
var imcTio = calcularIMC(alturaTio, pesoTio);
mostra("O imc do meu tio é: " + imcTio);
mostra("Ele ainda está " + (imcTio - 18.5) + " pontos acima do limite da magreza");
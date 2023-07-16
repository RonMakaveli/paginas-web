var pulaLinha = function(){
    document.write("<br>");
}

var mostra = function(frase){
    document.write(frase);
}

/*
mostra("**********");
mostra("**********");
mostra("**********");

for(var linha = 0; linha < 3; linha = linha + 1){
    mostra("**********");
}
*/

var tamanho = prompt("Qual é o tamanho do quadrado ?")

for(var linha = 0; linha < tamanho; linha = linha + 1 ){
    for(var coluna = 0; coluna < tamanho; coluna = coluna + 1){
        document.write("* &nbsp&nbsp");
    }
    document.write("<br>");
}

var tamanho2 = prompt("Qual é o tamanho do triangulo ?")

for(var linha = 0; linha <= tamanho2; linha++){
    for(var coluna=1; coluna <= linha ; coluna++){
        document.write("* &nbsp&nbsp");
    }
    document.write("<br>");
}

pulaLinha();

var qtdLin = 10;
var qtdCol = 20;

for (var linha = 1; linha <= qtdLin; linha++) {
    for (var coluna = 1; coluna < qtdCol; coluna++) {
        if ((coluna == linha) || (coluna == qtdCol - linha)) {
            mostra("*");
        }
        else {
            mostra("_");
        }
    }
    pulaLinha();
}

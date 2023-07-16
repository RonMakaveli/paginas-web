var mostra = function(frase){
    document.write(frase + "<br>");
}

var anoComoTexto = prompt("Informe o ano inicial");
var anoCopa = parseInt(anoComoTexto);
var anoLimite = prompt("Qual é o ano limite ?");

while(anoCopa <= anoLimite){
    mostra(anoCopa + " tem copa!");
    anoCopa = anoCopa + 4;
}

mostra("Ufa! esses foram os anos de copa até " + anoLimite);


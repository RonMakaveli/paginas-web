var mostra = function(frase){
    document.write(frase + "<br>");
}

var anoComoTexto = prompt("Informe o ano inicial");
var anoOlimpiadas = parseInt(anoComoTexto);
var anoLimite = prompt("Qual é o ano limite ?");

while(anoOlimpiadas <= anoLimite){
    mostra(anoOlimpiadas + " tem olipíadas!");
    anoOlimpiadas = anoOlimpiadas + 4;
}

mostra("Ufa! esses foram os anos de olipíadas até " + anoLimite);


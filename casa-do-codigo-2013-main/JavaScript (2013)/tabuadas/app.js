var mostra = function(frase){
    document.write(frase + "<br>");
}

var base = prompt("Qual é o numero base ?")
var multiplicador = prompt("você quer multiplicar " + base + " quantas vezes ?");
while(multiplicador <= 10){
    mostra(base + " vezes " + multiplicador + " é igual a " + base * multiplicador);
    multiplicador = multiplicador + 1;
}
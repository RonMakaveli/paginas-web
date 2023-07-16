
/* //ao iniciar o programa com esse código, será feito um loop infinito.
for ( ; ; ) {
    alert("Mensagem para repetição infinita");
}
*/

/* //isso com o while.
var numero = 1;
while(numero <= 10){
    alert(numero);
    numero = numero + 1;
}
*/

/* //isso com o for.
var numero = 1;
for(; numero <= 10; ){
    alert(numero);
    numero = numero + 1;
}
*/

/*// primeiro espaço antes do ponto-e-vírgula para realizar inicializações.
for(var numero = 1; numero <= 10; ){
    alert(numero);
    numero = numero + 1;
}
*/

/* //1 até 10 com esse novo comando da seguinte maneira.
for(var numero = 1; numero <= 10; numero = numero + 1){
    alert(numero);
} */

var mostra = function(frase){
    document.write(frase + "<br>");
}

//for([inicialização]; [condição para repetir]; [modificação do valor]);
for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
    mostra(multiplicador * 1);
}

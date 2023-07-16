//Criando uma função para pular linhas utilizando uma tag do HTML.
function pulaLinha(){
    document.write("<br>");
}

//Criando uma função que utiliza um método e chama nossa função pulaLinha.
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

var vitoriasRival = prompt("quantas vitorias nosso rival tem ?");
var empatesRival = prompt("Quantos vezes nosso rival empatou ?");
var derrotasRival = prompt("Quantas vezes nosso rival perdeu ?");
var pontosRival = (vitoriasRival * 3) + parseInt(empatesRival) - parseInt(derrotasRival);

//Perguntando dados para o usuário através da função Prompt.
var vitorias = prompt("Quantos jogos o Vasco venceu ?");
var empates = prompt("Quantos jogos o Vasco empatou ?");
var derrotas = prompt("Quantos jogos o Vasco perdeu ?");

//Calculando os pontos, cada vitória vale 3 pontos e cada empate vale 1 ponto.
var pontos = (vitorias * 3) + parseInt(empates) - parseInt(derrotas);

//Abaixo está a estutura de condicionais, dependendo dos dados retorna uma mensagem.

//Se estivermos com uma pontuação maior que a do ríval, iremos mostrar essa mensagem.
if(pontos > pontosRival){

    mostra("Nosso time tem " + pontos + " pontos!" + [pulaLinha()]);
    mostra("Nosso time está indo melhor que o rival!");

}else if(pontos < pontosRival){ // veremos essa se estivermos pior que nosso ríval.

    mostra("Nosso time tem " + pontos + " pontos!" + [pulaLinha()]);
    mostra("Nosso time está indo pior que o rival!");

}else{ // e veremos essa caso estejamos empatados com nosso ríval.

    mostra("Nosso time tem " + pontos + " pontos!" + [pulaLinha()]);
    mostra("Nosso time está empatado com o rival!");
        
}
    



function pulaLinha(){
    document.write("<br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

function sorteia(){
    var randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}

var randomNumber = sorteia(100)

var palpite = prompt("Já pensei. Qual você acha que é ?");
    if(isNaN(palpite)){
        mostra("Amigão por acaso isso é um número ?");
    } else if (palpite == randomNumber){
        mostra("Uau! você acertou, pois eu pensei no " + randomNumber);
    } else {
        mostra("Você errou, eu pensei no número " + randomNumber);
    }    
    
    if (isNaN(palpite)){
        mostra("sem comentários...")
    } else if (palpite < randomNumber){
        mostra("O número que pensei era maior que o do seu palpite.");
    } else {
        mostra("O numero que pensei era menor que o do seu palpite.");
    }
 
    
    
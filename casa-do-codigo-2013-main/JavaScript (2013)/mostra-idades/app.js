var pulaLinha = function(){
    document.write("<br>");
};

var pulaDuasLinhas = function(){
    document.write("<br>" + "<br>");
}

var pulaTresLinhas = function(){
    document.write("<br>" + "<hr>" + "<br>");
}

var mostra = function(frase){
    document.write("<big><strong>" + frase + "</strong></big>");
    pulaLinha();
}

var ano = 2022;

document.write("Eu nasci em: " + (ano - 22));
pulaLinha();
document.write("Adriano nasceu em: " + (ano - 26));
pulaLinha();
document.write("Paulo nasceu em: " + (ano - 23));
pulaLinha();

mostra("joão nasceu em: " + (ano - 13));
mostra("Pedro nasceu em: " + (ano - 42));
mostra("Ricardo nasceu em: " + (ano - 77));

pulaDuasLinhas();

mostra("Marcia nasceu em: " + (ano - 40));
mostra("Flavia nasceu em: " + (ano - 16));
mostra("Samira nasceu em: " + (ano - 10));

pulaTresLinhas();

mostra("Maria nasceu em: " + (ano - 75));
mostra("Ravena nasceu em: " + (ano - 30));
mostra("Felipe nasceu em: " + (ano - 24));
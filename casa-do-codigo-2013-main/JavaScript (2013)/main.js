//alert("Hello World!");

document.write("Esse é o meu segundo programa!<br>");
document.write("Segunda linha do segundo programa!<br>");

document.write("Minha idade é: " + 22 + "<br>");

//document.write("25"); //Caracteres entre aspas são chamados de String

//document.write(25 + 25);
//document.write("25" + "25"); //Famigerada Concatenação

document.write("Eu nasci em: " + (2022 - 22) + "<br>");
document.write("Adriano nasceu em: " + (2022 - 26) + "<br>");
document.write("Paulo nasceu em: " + (2022 - 32) + "<br>");

var ano = 2022; // Atribuindo o valor 2022 na variável ano.
var eu = 22;
var adriano = 26;
var paulo = 32;

var total = eu + adriano + paulo;
var media = total / 3;
document.write("A soma de nossas idades é: " + total + "<br>");

document.write("ano <br>");
document.write(ano + "<br>");

document.write((eu + adriano + paulo) / 3 + "<br>");
document.write("A média de idade é: " + Math.round(media) + "<br>");

var pularLinha = function() {
    document.write("<br>");
}

document.write("Eu nasci em: " + (ano - 22));
pularLinha();
document.write("Adriano nasceu em: " + (ano - 26));
pularLinha();
document.write("Paulo nasceu em: " + (ano - 32));
pularLinha();

document.write("Olá mundo! (novamente)");
pularLinha();
document.write("Esse é o meu segundo programa ?");
pularLinha();
console.log("Esta mensagem aparece apenas no log");

//Trabalhe com dados capturados: pergunte a altura e peso do usuário

var nome = prompt("Olá! Qual o seu nome ?");
document.write("Bem vindo, " + nome);
pularLinha();

//Você também pode perguntar a idade do usuário, e utilizar seu próprio nome.

var idade = prompt(nome +", Quantos anos você tem ?");
document.write(nome + " tem " + idade + " anos");

//Vamos fazer um primeiro teste para enxergar bem esse problema.

/* 
var vitorias = 3;
var empates = "1";
var = empatesNumero = parseInt(empates);
var pontos = vitorias * 3 + empatesNumero;
alert (total);
*/

//Uma outra forma seria chamar o parseInt usando a mesma variavel.

/* 
var vitorias = 3;
var empates = "1";
empates = parseInt(empates);
var pontos = vitorias * 3 + empates;
alert(total);
*/

//E outra forma seria chamar o parseInt na mesma linha do calculo

var vitorias = 3;
var empates = 1; //string
var pontos = vitórias * 3 parseInt(empates);
alert(total);


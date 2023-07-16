var totalFamiliar = prompt("Quantos familiares são ?");
var somaIdades = 0;

var numero = 1;
while(numero <=  totalFamiliar){
    var idade = parseInt(prompt("Qual é a idade ?")); //Convertendo o valor "string" em número.
    somaIdades = somaIdades + idade;

    numero++;
}

var media = somaIdades / totalFamiliar;
alert("A media é: " + parseInt(media));
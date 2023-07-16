
var calculoDiasVida = function(idade){
    return idade * 365;
}
var calculaBatimentos = function(dias){
    return dias * 24 * 60 * 80;
}

var idade = 22;
var dias = calculoDiasVida(idade);
var batimentos = calculaBatimentos(dias);

document.write("Você ja viveu por " + dias + " dias. <br>");
document.write("Seu coração já bateu cerca d " + batimentos + " até hoje.");


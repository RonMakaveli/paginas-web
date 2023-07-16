var tanque = 40;
var caminhoGasolina = 480;
var caminhoAlcool = 300;
var consumoGasolina = caminhoGasolina / tanque;
var consumoAlcool = caminhoAlcool / tanque;

document.write("O consumo de gasolina é: " + consumoGasolina + "<br>");
document.write("O consumo de alcool é: " + consumoAlcool + "<br>");

var precoGasolina = 2.90;
var precoGasolinaKm = precoGasolina / consumoGasolina;
var precoAlcool = 2.40;
var precoAlcoolKm = precoAlcool / consumoAlcool;

document.write(precoGasolinaKm.toFixed(2) + "<br>");
document.write(precoAlcoolKm.toFixed(2));




function calcularGorjeta() {
    // Obter o valor total da conta e a porcentagem da gorjeta
    var totalConta = parseFloat(document.getElementById('totalConta').value);
    var porcentagemGorjeta = parseFloat(document.getElementById('porcentagemGorjeta').value);
    
    // Calcular o valor da gorjeta
    var valorGorjeta = totalConta * (porcentagemGorjeta / 100);
    
    // Calcular o valor total a ser pago (conta + gorjeta)
    var valorTotal = totalConta + valorGorjeta;
    
    // Exibir os resultados
    document.getElementById('valorGorjeta').innerHTML = valorGorjeta.toFixed(2);
    document.getElementById('valorTotal').innerHTML = valorTotal.toFixed(2);
}
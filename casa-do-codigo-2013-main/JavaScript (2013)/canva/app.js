var tela = document.getElementById("tela");
var c = tela.getContext("2d");

c.fillStyle = "green";
c.fillRect(0, 0, 200, 400);

c.fillStyle = "red";
c.fillRect(400, 0, 200, 400);

c.fillStyle = "gray";
c.beginPath();
c.moveTo(300, 200);
c.lineTo(200, 400);
c.lineTo(400, 400);
c.fill();

c.fillStyle = "blue";
c.beginPath();
c.arc(300, 200, 50, 0, 2*3.14);
c.fill();
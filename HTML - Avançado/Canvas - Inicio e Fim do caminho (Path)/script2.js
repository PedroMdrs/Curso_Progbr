let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.moveTo(0,0);
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.fillStyle = "blue"

ctx.lineTo(300,300)
ctx.lineTo(0,300)
ctx.closePath()
ctx.fill()
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.fillStyle = "red"
ctx.moveTo(300,0)
ctx.lineTo(300,300)
ctx.lineTo(0,0);
ctx.closePath();
ctx.fill();
ctx.stroke()

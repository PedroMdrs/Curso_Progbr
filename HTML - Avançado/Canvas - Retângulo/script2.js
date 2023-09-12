let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

ctx.rect(12,12,225,475);
ctx.fillStyle = "black"
ctx.stroke.style = "black"
ctx.lineWidth = 3
ctx.fill();
ctx.stroke()
ctx.clearRect(180,250,30,30)
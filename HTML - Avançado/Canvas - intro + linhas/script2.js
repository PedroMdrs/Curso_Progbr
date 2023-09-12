let tela = document.getElementById("tela");
// todas as telas tem um objeto que eh um objeto desenhavel, o nome dele eh contexto
let ctx = tela.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(250,250);
ctx.lineTo(500, 0);
ctx.strokeStyle = "#FF0000"
ctx.lineWidth = 5;
// stroke eh o que da a espessura da linha de fato
ctx.stroke();
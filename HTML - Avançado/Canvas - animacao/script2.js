let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circle = {
    x: 0,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,

}
function drawCircle(c) {
    ctx.beginPath();
    ctx.rect(0, 0, 1250, 500);
    ctx.fillStyle = "purple"
    ctx.fill()

    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.fillStyle = "yellow"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fill()
    ctx.stroke()


}
setInterval(() => {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.03;
        circle.x += 5
    }
    drawCircle(circle)
}, 20);

let jogador = document.getElementById("jogador");
let posx = 0;
let posy = 0
setInterval((x,y) => {
    posx++;
    posy++

    jogador.style.top =+ posx + "px";
    jogador.style.left =+ posy + "px";

}, 5);
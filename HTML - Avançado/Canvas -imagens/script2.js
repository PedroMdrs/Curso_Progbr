let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let image = new Image()
image.src = "0a41e28b5c299bca2ec1be7b56513995.jpg";
image.onload= desenharImg;

function desenharImg() {
    ctx.drawImage(this, 100, 100, this.naturalWidth / 2, this.naturalHeight / 2)
}
desenharImg()
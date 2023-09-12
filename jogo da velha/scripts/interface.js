document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })

})
function handleClick(event) {
    let square = event.target
    let position = square.id;


    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTime == 0)
            alert("O jogo acabou - o vencedor foi " + String.fromCodePoint(0x1F975))
            else{
                alert("O jogo acabou - o vencedor foi " + String.fromCodePoint(0x1F976))
            }

        }, 10);
    };
    updateSquare(position);

}
function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`

}
function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol == '') {
            square.innerHTML = `<div></div>`
        }
    })
}
function restartGame() {
    gameOver = false;
    playerTime = 0;
    board = ['', '', '', '', '', '', '', '', '', ''];
    updateSquares();
}
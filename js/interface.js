document.addEventListener('DOMContentLoaded', () => {
    let pieces = document.querySelectorAll(".mark-area")

    pieces.forEach(piece => {
        piece.addEventListener('click', handleClick)
    })
})

function handleClick(e) {
    let position = e.target.id

    if(handleMove(position)) {
        setTimeout(() => {
            alert(`And the Winner is Player ${playerTry}`)
        }, 30)
    }
    updatePiece(position)
}

function updatePiece(position) {
    let piece = document.getElementById(position.toString())
    let symbol = board[position]
    piece.innerHTML = `<div class="${symbol}"></div>`
}

let restartButton = document.getElementById("restart")
restartButton.addEventListener('click', restartGame)
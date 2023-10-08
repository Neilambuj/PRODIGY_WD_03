const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Add event listeners to each cell
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (gameBoard[index] === "" && gameActive) {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.textContent = `Player ${currentPlayer}'s Turn`;
        }
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            message.textContent = `Player ${gameBoard[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes("") && gameActive) {
        message.textContent = "It's a draw!";
        gameActive = false;
    }
}

const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let gameEnded = false;

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (!cell.textContent && !gameEnded) {
                    cell.textContent = currentPlayer;
                    checkWinner();
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            });
        });

        function checkWinner() {
            const lines = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
                [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
                [0, 4, 8], [2, 4, 6]             // Diagonal
            ];

            for (const line of lines) {
                const [a, b, c] = line;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    gameEnded = true;
                    cells[a].style.backgroundColor = '#aaffaa';
                    cells[b].style.backgroundColor = '#aaffaa';
                    cells[c].style.backgroundColor = '#aaffaa';
                    document.getElementById('winner').textContent = `¡${currentPlayer} ganó!`;
                    document.getElementById('winner').style.display = 'block';
                    return;
                }
            }

            const isTie = [...cells].every(cell => cell.textContent);
            if (isTie) {
                gameEnded = true;
                document.getElementById('winner').textContent = '¡Empate!';
                document.getElementById('winner').style.display = 'block';
            }
        }
const cells = document.querySelectorAll('.cell');
const Reiniciar = document.getElementById('reiniciar');
const Mensaje = document.getElementById('mensaje');

        let TurnoJugador = 'X';
        let FinJuego = false;

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (!cell.textContent && !FinJuego) {
                    cell.textContent = TurnoJugador;
                    VGanador();
                    TurnoJugador = (TurnoJugador === 'X') ? 'O' : 'X';
                }
            });
        });

        function VGanador() {
            const lines = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],  
                [0, 3, 6], [1, 4, 7], [2, 5, 8],  
                [0, 4, 8], [2, 4, 6]             
            ];

            for (const line of lines) {
                const [a, b, c] = line;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    FinJuego = true;
                    cells[a].style.backgroundColor = '#aaffaa';
                    cells[b].style.backgroundColor = '#aaffaa';
                    cells[c].style.backgroundColor = '#aaffaa';

                    document.getElementById('mensaje').textContent = `¡Jugador ${TurnoJugador} ganó!`;
                    document.getElementById('mensaje').style.display = 'block';
                    return;
                }
            }

            const Empate = [...cells].every(cell => cell.textContent);
            if (Empate) {
                FinJuego = true;
                document.getElementById('mensaje').textContent = '¡Empate!';
                document.getElementById('mensaje').style.display = 'block';
            }
        }

        Reiniciar.addEventListener('click', () => {
            cells.forEach(cell => {
                cell.textContent = '';
                cell.style.backgroundColor = '#eee';
            });
            Mensaje.textContent = '';
            Mensaje.style.display = 'none';
            FinJuego = false;
            TurnoJugador = 'X';
        });
 
import { Square } from "./Square";
import PropTypes from 'prop-types';

export function WinnerModal ({ winner, resetGame}) {

    const winnerText = winner === false ? 'Draw' : 'Winner';
    return (
        winner !== null && (
            <section className='winner'>
          <div className='text'>
            <h2>
              {winnerText}
            </h2>
            <header className='win'>
              {
                  winner && <Square>{winner}</Square>
              }
            </header>
            <footer>
              <button onClick={resetGame}>Try Again</button>
            </footer>
          </div>
        </section>
      )
    )
}

WinnerModal.PropTypes = {
    winner: PropTypes.bool.isRequired,
    resetGame: PropTypes.func.isRequired,
}
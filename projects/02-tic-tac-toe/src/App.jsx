import './App.css'
import { useState } from 'react'
import { Square } from './Components/Square.jsx';
import confetti from 'canvas-confetti';
import { TURNS } from './constants.js';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './Components/WinnerModal.jsx';


function App() {
  const [board, setBoard ] = useState(() => {
    const boardSaved = window.localStorage.getItem('board')
    return boardSaved ? JSON.parse(boardSaved) : Array(9).fill(null)
  });
  const [turn, setTurn ] = useState(()=> {
    const turnSaved = window.localStorage.getItem('turn');
    return turnSaved ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const updateBoard = (index) =>{
    /* posicion marcada, no hacer nada */
    if(board[index] ||  winner) return
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Draw
    }
  }

  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((square, index)=> {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App

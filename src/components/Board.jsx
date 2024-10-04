import Square from './Square'
import './Board.css'
import { useState } from 'react'
import { calculateWinner } from '../utils'

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const handleClick = index => {
    const squaresCopy = squares.slice()
    if (calculateWinner(squaresCopy) || squaresCopy[index]) {
      return
    }
    squaresCopy[index] = isXNext ? 'X' : 'O'
    setSquares(squaresCopy)
    setIsXNext(!isXNext)
  }

  const renderSquare = index => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
  }

  return (
    <div className='board-container'>
      <h2>Tic Tac Toe</h2>
      <div className='row'>{status}</div>
      <div className='row'>
        <button className='restart-btn' onClick={handleRestart}>
          Restart
        </button>
      </div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board

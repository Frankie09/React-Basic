import { useState } from 'react'

import Board from './components/Board'


function Game(){
  // const [xNext , setXNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill()]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares =history[currentMove];
  const xNext = currentMove % 2 === 0 ;
  function jumpTo(nextMove){
    setCurrentMove(nextMove)
    // setXNext(nextMove % 2 === 0);
  }
  
  function handlePlay(nextSquare){
    const nextHistory = [...history.slice(0,currentMove+1),nextSquare]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
    // setXNext(!xNext);
  }
  
  const moves = history.map((squares,move)=>{
    let description= ''
    if (move>0){
      description = 'Go to move '+move
    }else{
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return(
    <>
    <div className="game">
      <div className="game-board">
        <Board xNext = {xNext} squares= {currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
    
    </>
  );
}



export default Game

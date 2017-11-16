import React from 'react';
import ReactDom from 'react-dom';
import Board from './Board';

/*The Square component renders a single <button> 
The Board renders 9 squares
The Game component renders a game board*/

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  }
  
  export default Game;
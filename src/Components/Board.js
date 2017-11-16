import React from 'react';
import ReactDom from 'react-dom';
import Square from './Square';
import WinningLogic from '../Services/WinningLogic';
import ComputerPlayer from '../Services/ComputerPlayer';

const human = 'X';
const computer = 'O';
class Board extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
            count:0,
        };
    }

    handleClick(i){   
        const squares = this.state.squares.slice();
        squares[i] = human;
        this.handleComputerClick(squares);
    }

    handleComputerClick(squares){
        let count = this.state.count+1 ;
        if(count<8){
        let i = ComputerPlayer(squares, count);
        squares[i] = computer; }
        
        this.setState({squares: squares,
                    count:count+1});
    console.log(this.state.count);
    }
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick= {() =>this.handleClick(i)}/>;
    }
  
    render() {
      const winner = WinningLogic(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      }else if(!winner && this.state.count > 8) {
        status = 'Game is Tie';
      }else {
        status = 'Next Player: X';
      }
      return (
        <div>
          <h3 className= 'status'> {status}</h3>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;
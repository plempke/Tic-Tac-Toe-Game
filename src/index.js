import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Square(props) {
  return (
    <button className="sqaure" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
/*
Wrote Square as a functional component that passes the variable 'props' as an input
that's going to be rendered; rather than having a square class that uses Just
a render method.
*/

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  /*
  Implementiing handleClick allows our state to be stored in the board component
  rather than the individual sqaures component. Now when the Board's state changes
  the square compontnents will render again automatically
  As it takes the state moving though the program it alternates between or 'X' and 'O'
  */

  renderSqaure(i) {
    return (
      <Square
        value ={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSqaure(0)}
          {this.renderSqaure(1)}
          {this.renderSqaure(2)}
        </div>
        <div className="board-row">
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div className="board-row">
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
      </div>
    );
  }
}
/*
Board class returns our square class and creates our grid layout with 9 squares
*/
/*
Employs a the board with placeholder values
*/
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
/*
Creates out Game class that encapsulates our Game, Game-board, and Game-info
*/

//==========================================================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

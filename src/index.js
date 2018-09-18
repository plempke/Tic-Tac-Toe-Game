import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
/*
Initializes our state for our react component
*/

  render() {
    return (
      <button
        className="sqaure"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
/*
Square Component renders a single button used for selecting our squares
It will return an error if a square has already been clicked
*/

class Board extends React.Component {
  renderSqaure(i) {
    return <Square value ={i} />;
  }

  render() {
    const status = 'Next player: X';

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

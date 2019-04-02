import React from "react";
import Cell from "./cell";
import Display from "./display"

const createBoard = () => new Array(9).fill(" ");

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: createBoard() };
    this.handleClick = this.handleClick.bind(this);
    this.symbols = ["O", "X"];
    this.count = 0;
    this.currentSymbol = this.getCurrentSymbol();
  }

  handleClick(id) {
    const newCells = this.state.board.map(x => x);
    newCells[id] = this.currentSymbol;
    this.setState({ board: newCells });
  }

  hasWon(symbol) {
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    const cells = [];
    this.state.board.forEach((cell, index) => {
      if (cell == symbol) cells.push(index + 1);
    });
    return winningCombinations.some(combination =>
      combination.every(cell => cells.includes(cell))
    );
  }

  render() {
    const cells = this.state.board.map((cell, id) => {
      return <Cell symbol={cell} onClick={this.handleClick.bind(null, id)} />;
    });
    let message = `Next player ${this.currentSymbol}`;
    if (this.hasWon(this.currentSymbol)) {
      message = `${this.currentSymbol} has won`;
    }
    this.currentSymbol = this.getCurrentSymbol();
    return (
      <Display cells={cells} message={message} />
    );
  }

  getCurrentSymbol() {
    return this.symbols[this.count++ % 2];
  }
}


export default Board;

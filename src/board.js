import React from "react";
import Cell from "./cell";
import Display from "./display";

const createBoard = () => new Array(9).fill(" ");

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: createBoard() };
    this.handleClick = this.handleClick.bind(this);
    this.symbols = ["O", "X"];
    this.count = 0;
    this.currentSymbol = this.getCurrentSymbol();
    this.game = this.props.game;
  }

  handleClick(id) {
    let { message, isMovePlaced } = this.game.makeMove(id);
    if (isMovePlaced) {
      this.message = message;
      const newCells = this.state.board.map(x => x);
      newCells[id] = this.getCurrentSymbol();
      this.setState({ board: newCells });
    }
  }

  render() {
    const cells = this.state.board.map((cell, id) => {
      return (
        <Cell
          symbol={cell}
          onClick={this.handleClick.bind(null, id)}
          key={id}
        />
      );
    });
    return <Display cells={cells} message={this.message} />;
  }

  getCurrentSymbol() {
    return this.symbols[this.count++ % 2];
  }
}

export default Board;

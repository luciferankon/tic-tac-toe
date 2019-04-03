class Game {
  constructor(player1, player2) {
    this.playerDetails = {
      X: player1,
      O: player2
    };
    this.moves = {
      X: [],
      O: []
    };
    this.currentSymbolIndex = 0;
    this.symbols = ["X", "O"];
    this.winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  }

  makeMove(position) {
    const isAlreadyThere = Object.keys(this.moves).some(move =>
      this.moves[move].includes(position + 1)
    );
    if (isAlreadyThere)
      return { message: "Place Already Occupied", isMovePlaced: false };
    const currentSymbol = this.symbols[this.currentSymbolIndex++ % 2];
    this.moves[currentSymbol].push(position + 1);
    if (this.hasWon(currentSymbol)) {
      return {
        message: this.playerDetails[currentSymbol] + " has won",
        isMovePlaced: true
      };
    }
    const nextSymbol = this.symbols.filter(
      symbol => symbol != currentSymbol
    )[0];
    return {
      message: "Current Player " + this.playerDetails[nextSymbol],
      isMovePlaced: true
    };
  }

  hasWon(symbol) {
    const cells = this.moves[symbol];
    return this.winningCombinations.some(combination =>
      combination.every(cell => cells.includes(cell))
    );
  }
}

export default Game;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./board";
import Game from "./game"

const game = new Game("Ankon","Kannu");

ReactDOM.render(<Board game={game}/>, document.getElementById("root"));

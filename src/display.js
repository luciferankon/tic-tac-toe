import React from "react"

const Display = function(props) {
  return (
    <div>
      <div className="header">{props.message}</div>
      <div className="board">{props.cells}</div>
    </div>
  );
};

export default Display
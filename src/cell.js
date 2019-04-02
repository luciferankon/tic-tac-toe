import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className='cell' onClick={this.props.onClick}>
        {this.props.symbol}
      </button>
    );
  }
}

export default Cell;

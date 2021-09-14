import React, { Component } from "react";
import "./styles/globals.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.colors = ["#447473", "#E79735", "#5477A5"];
    this.state = {
      board: [],
      width: 6,
      height: 5,
    };
  }

  componentDidMount() {
    this.createBoardColor();
  }

  randomColor = () => {
    const colorIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[colorIndex];
  };

  createBoardColor = () => {
    const { width, height } = this.state;
    const board = [];
    for (let i = 0; i < height; i++) {
      const horizontal = [];
      for (let j = 0; j < width; j++) {
        const color = this.randomColor();
        horizontal.push({ color, id: i + "-" + j });
      }
      board.push(horizontal);
    }
    this.setState({ board });
  };

  detectElementAdjacency = (row, col, color) => {
    const { board, width, height } = this.state;
    let elementsAdjacency = {
      vertical: [board[row][col].id],
      horizontal: [board[row][col].id],
    };
    // find vertical
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col].color === color) {
        elementsAdjacency.vertical.push(board[i][col].id);
      } else {
        break;
      }
    }
    for (let i = row + 1; i < height; i++) {
      if (board[i][col].color === color) {
        elementsAdjacency.vertical.push(board[i][col].id);
      } else {
        break;
      }
    }
    if (elementsAdjacency.vertical.length < 3) {
      elementsAdjacency.vertical = [];
    }
    //find horizontal
    for (let i = col - 1; i >= 0; i--) {
      if (board[row][i].color === color) {
        elementsAdjacency.horizontal.push(board[row][i].id);
      } else {
        break;
      }
    }
    for (let i = col + 1; i < width; i++) {
      if (board[row][i].color === color) {
        elementsAdjacency.horizontal.push(board[row][i].id);
      } else {
        break;
      }
    }
    if (elementsAdjacency.horizontal.length < 3) {
      elementsAdjacency.horizontal = [];
    }
    elementsAdjacency = [
      ...elementsAdjacency.vertical,
      ...elementsAdjacency.horizontal,
    ];
    console.log(elementsAdjacency);
    const checkedBoard = board;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const isChecked = elementsAdjacency.includes(checkedBoard[i][j].id);
        checkedBoard[i][j].checked = isChecked;
      }
    }
    this.setState({ board: checkedBoard });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { board, width, height } = this.state;
    return (
      <>
        <div className='title-container'>
          <h3 className='title'>Detect element adjacency</h3>
          <input
            type='number'
            name='width'
            value={width}
            onChange={this.handleChange}
          />
          X
          <input
            type='number'
            name='height'
            value={height}
            onChange={this.handleChange}
          />
          <button onClick={this.createBoardColor}>Apply</button>
        </div>
        <div className='board'>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className='board-row'>
              {row.map((col, colIndex) => (
                <div
                  key={colIndex + "col"}
                  className={`board-col ${col.checked ? "checked" : ""}`}
                  style={{ backgroundColor: col.color }}
                  onClick={() =>
                    this.detectElementAdjacency(rowIndex, colIndex, col.color)
                  }
                >
                  {rowIndex}-{colIndex}
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

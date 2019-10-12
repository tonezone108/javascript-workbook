"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]; //board array is defined and empty in order to receive values from the user

let playerTurn = "X";

function printBoard() {
  // function 'prints' out board but is really just priting out the values of the board array and a few '-''s and '|' to build a board
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  //checks to see if board array values satisfy a horizonal win, print out board, announce winning player, and return true
  if (
    (board[0][0] == playerTurn &&
      board[0][1] == playerTurn &&
      board[0][2] == playerTurn) ||
    (board[1][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[1][2] == playerTurn) ||
    (board[2][0] == playerTurn &&
      board[2][1] == playerTurn &&
      board[2][2] == playerTurn)
  ) {
    printBoard();
    console.log("Player " + playerTurn + " wins!");
    return true;
  }
}

function verticalWin() {
  //checks to see if board array values satisfy a vertical win, print out board, announce winning player, and return true
  if (
    (board[0][0] == playerTurn &&
      board[1][0] == playerTurn &&
      board[2][0] == playerTurn) ||
    (board[0][1] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][1] == playerTurn) ||
    (board[0][2] == playerTurn &&
      board[1][2] == playerTurn &&
      board[2][2] == playerTurn)
  ) {
    printBoard();
    console.log("Player " + playerTurn + " wins!");
    return true;
  }
}

function diagonalWin() {
  //checks to see if board array values satisfy a diagnonal win, print out board, announce winning player, and return true

  if (
    (board[0][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][2] == playerTurn) ||
    (board[2][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[0][2] == playerTurn)
  ) {
    printBoard();
    console.log("Player " + playerTurn + " wins!");
    return true;
  }
}

function checkForWin() {
  //checkForWin merely checks to see if horizonalWin or verticalWin or diagonal win return true, and if so checkForWin returns true or false

  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  } else {
    return false;
  }
}

function checkForDraw() {
  /**checkForDraw checks to see if the board is filled up with no clear winner,
   * its important that its at the bottom so that the file can check for a win first before checking for a draw.
   * If a draw is detected it will print the board announce the draw and return true or false
   **/
  if (
    board[0][0] !== " " &&
    board[0][1] !== " " &&
    board[0][2] !== " " &&
    board[1][0] !== " " &&
    board[1][1] !== " " &&
    board[1][2] !== " " &&
    board[2][0] !== " " &&
    board[2][1] !== " " &&
    board[2][2] !== " "
  ) {
    printBoard();
    console.log("Its a draw!");
    return true;
  } else {
    return false;
  }
}

function ticTacToe(row, column, cellId) {
  //This is where most of the magic happens. There is some quality control going on here.
  if (row > 2 || column > 2) {
    //checks to see if row and column values from the user are under 2 and anounces a message.
    console.log("Cordiantes must be between 0 and 2. Try again.");
  } else if (row.length > 1 || column.length > 1) {
    //checkes to see if row and column value length are over 1 character and announces a message.
    console.log("Single digits please");
  } //most of the work gets done here
  else if (board[row][column] == " ") {
    //checks to see if the board array cordinates are empty, everything within this else if statement will not run if that condition is not satisfied
    board[row][column] = playerTurn; //assigns value if empty.
    let cell;
    cell = document.getElementById(cellId);
    console.log(cell);
    cell.innerText = playerTurn;
    console.log("I am trying to assign value to " + cellId);

    if (checkForWin() || checkForDraw()) {
      //after player 'move' has been made this checks to see if there is a win or a draw and restarts the game as needed.
      alert("Game Over");
      board[0][0] = " ";
      board[0][1] = " ";
      board[0][2] = " ";
      board[1][0] = " ";
      board[1][1] = " ";
      board[1][2] = " ";
      board[2][0] = " ";
      board[2][1] = " ";
      board[2][2] = " ";

      document.getElementById("00").innerText = "";
      document.getElementById("01").innerText = "";
      document.getElementById("02").innerText = "";
      document.getElementById("10").innerText = "";
      document.getElementById("11").innerText = "";
      document.getElementById("12").innerText = "";
      document.getElementById("20").innerText = "";
      document.getElementById("21").innerText = "";
      document.getElementById("22").innerText = "";

      playerTurn = "X";
    } else if (playerTurn == "X") {
      playerTurn = "O";
    } else if (playerTurn == "O") {
      playerTurn = "X";
    }
  }
}

function handleInput(row, column) {
  let rowString;
  let columnString;
  let cellId;
  rowString = row.toString();
  columnString = column.toString();
  cellId = rowString + columnString;
  ticTacToe(row, column, cellId);
}

function reset() {
  board[0][0] = " ";
  board[0][1] = " ";
  board[0][2] = " ";
  board[1][0] = " ";
  board[1][1] = " ";
  board[1][2] = " ";
  board[2][0] = " ";
  board[2][1] = " ";
  board[2][2] = " ";

  document.getElementById("00").innerText = "";
  document.getElementById("01").innerText = "";
  document.getElementById("02").innerText = "";
  document.getElementById("10").innerText = "";
  document.getElementById("11").innerText = "";
  document.getElementById("12").innerText = "";
  document.getElementById("20").innerText = "";
  document.getElementById("21").innerText = "";
  document.getElementById("22").innerText = "";
}
// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  // getPrompt();
}

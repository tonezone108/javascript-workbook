"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  console.log(solution);
  console.log(guess);
  let XO = ["-", "-", "-", "-"];
  let a = 0;
  let b = 0;

  for (let i = 0; i < solution.length; i++) {
    if (solution[i] == guess[i]) {
      XO[i] = "X";
    } else {
      for (let y = 0; y < solution.length; y++) {
        if (solution[i] == guess[y]) {
          XO[i] = "O";
        }
      }
    }
  }

  for (let i = 0; i < XO.length; i++) {
    if (XO[i] === "X") {
      a++;
    } else if (XO[i] === "O") {
      b++;
    }
  }
  let hint = a + "-" + b;
  return hint;
}

function mastermind(guess) {
  solution = "abcd"; // Comment this out to generate a random solution
  if (guess == solution) {
    return "You guessed it!";
  }
  board.push(guess);
  var hint = generateHint(guess);
  console.log(hint);
  // your code here
}

function getPrompt() {
  rl.question("guess: ", guess => {
    generateSolution();
    mastermind(guess);
    printBoard();

    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//use .pop[] to remove and .push[] to add into array. Be sure to store the values of .pop[] and .push[] into variables.

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //accespts startStack & endStack as input and moves it
  // Your code here
  let start = "";
  let end = "";
  start = startStack;
  end = endStack;
  let startIndex;
  let endIndex;
  startIndex = stacks[start].length - 1;
  endIndex = stacks[end].length - 1;
  let startArray;
  let endArray;
  startArray = stacks[start];
  endArray = stacks[end];
  // console.log("start" + start);
  // console.log("startIndex" + startIndex);
  // console.log("startArray" + startArray);
  var moved = startArray.pop();

  stacks[end].push(moved);
}

function isLegal(startStack, endStack) {
  //accept startStack & endStack and compare them, if endstack is smaller than startstack return false, legal move is if end stack // JUST THINK THROUGH SCENARIOS
  // Your code here
  let start = "";
  let end = "";
  start = startStack;
  end = endStack;
  let startIndex;
  let endIndex;
  startIndex = stacks[start].length - 1;
  endIndex = stacks[end].length - 1;
  let startArray;
  let endArray;
  startArray = stacks[start][startIndex];
  endArray = stacks[end][endIndex];

  // console.log("startArray " + startArray);
  // console.log("endArray " + endArray);
  if (startArray < endArray) {
    return true;
  } else if (stacks[end].length == 0) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // is c: [4, 3, 2, 1]
  // Your code here
  let winStack = [4, 3, 2, 1];
  if (
    (stacks.c[0] == winStack[0] &&
      stacks.c[1] == winStack[1] &&
      stacks.c[2] == winStack[2] &&
      stacks.c[3] == winStack[3]) ||
    (stacks.b[0] == winStack[0] &&
      stacks.b[1] == winStack[1] &&
      stacks.b[2] == winStack[2] &&
      stacks.b[3] == winStack[3])
  ) {
    printStacks();
    console.log("You win!");
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  //runs the previous three functions and sees if it wins and tests passs.
  // Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    console.log("That move is illegal, try again");
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}

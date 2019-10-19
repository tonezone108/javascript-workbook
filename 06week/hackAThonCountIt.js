"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt() {
  console.log("Type something to find out how many letters");
  rl.question("Word ", answer => {
    console.log(CountIt(answer));
    getPrompt();
  });
}

function CountIt(word) {
  //   let string = word.replace(/[.,\/@^*#!$%\^&\*;:{}=\-_`~()]/g, "");
  let string = word.replace(/[^a-zA-Z0-9]/g, "");
  var results = {};

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    //   console.log(char);
    if (!(char in results)) {
      // console.log("I don't exist");
      // obj["key3"] = "value3";
      results[char] = 1;
    } else {
      results[char] = results[char] + 1;
      // map[key] = (map[key]+1)
      // console.log("I do exist");
    }
  }

  console.log(results);
}

getPrompt();

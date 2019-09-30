"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//RULES OF PIG LATIN:
//if starts with a vowel add "yay" to end
//if word does not have a vowel add "ay" to the end
//if word has vowel, split word before first vowel, switch halves, and add "ay" to the end

function pigLatin(word) {
  word = word.trim().toLowerCase(); //sets word to lowercase
  let vowels = ["a", "e", "i", "o", "u"]; //array is created to compare with characters of word
  let i; //variables are declared to run tests
  let hasvowel = false;
  let substring;

  if (
    //tests to see if first character of word is vowel
    word[0] == vowels[0] ||
    word[0] == vowels[1] ||
    word[0] == vowels[2] ||
    word[0] == vowels[3] ||
    word[0] == vowels[4]
  ) {
    word = word.concat("yay");
    hasvowel = true;
  } else {
    //runs if first character is not a vowerl
    for (i = 0; i < word.length && hasvowel == false; i++) {
      if (
        //tests to see if any character in string is a vowel
        word[i] == vowels[0] ||
        word[i] == vowels[1] ||
        word[i] == vowels[2] ||
        word[i] == vowels[3] ||
        word[i] == vowels[4]
      ) {
        //if test returns true substring gets valued assigned and is concated to word. Word is then sliced as needed and concated with 'ay'
        substring = word.substring(0, i);
        word = word.concat(substring);
        word = word.slice(i, word.length);
        word = word.concat("ay");
        hasvowel = true;
      }
    }
    for (i = 0; i < word.length && hasvowel == false; i++) {
      if (
        //tests to see if no characters are vowels, which should run if the first two test return false. Will concate 'ay' if test returns true
        word[i] !== vowels[0] &&
        word[i] !== vowels[1] &&
        word[i] !== vowels[2] &&
        word[i] !== vowels[3] &&
        word[i] !== vowels[4]
      ) {
        word = word.concat("ay");
        hasvowel = true;
      }
    }
  }
  //modified word gets returned
  return word;

  // Your code here
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

function handleTranslate() {
  console.log("I am inside handleTranslate()");

  //1. get the input value from the inputbox
  var inputBox = document.getElementById("plainText");
  console.log(inputBox);
  var englishWord = inputBox.value;
  console.log("english word", englishWord);

  //2. call the pigLatin function with this value
  var pigLatinWord = pigLatin(englishWord);
  console.log("pig latin word ", pigLatinWord);
  //3. write teh result that the piglatinfunction returns to the screen
  var spanElement = document.getElementById("pigLatinText");
  console.log("span element", spanElement);
  spanElement.innerText = pigLatinWord;
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}

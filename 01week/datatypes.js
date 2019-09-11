var now = new Date();
console.log("The time at the beep is", now);
var number = 7;
var numbertostring = number.toString();
console.log("The rings of Tartarus amount to", numbertostring);
var string = 25;
var stringtonumber = parseInt(string);
console.log("You want to know a number funnier than 24?... ", stringtonumber);

//These variables need to be compared to each other
var a = true;
var b = null;
var c = undefined;
var d = 108;
var e = NaN;
var f = "Stringy";

console.log("Var A is a ", typeof a);
console.log("Var B is a ", typeof b);
console.log("Var C is a ", typeof c);
console.log("Var D is a ", typeof d);
console.log("Var E is a ", typeof e);
console.log("Var F is a ", typeof f);
console.log("Dividing by 0 is a", typeof (10 / 0));
console.log("parsing a non-integer is a ", typeof parseInt("boy"));

var x = 2;
var y = 3;
console.log(x + y);

var yes1 = true;
var yes2 = true;

if (yes1 === yes2) {
  console.log("yes1 and yes2 are the same!");
}

var color = "red";
var special = "pencil";

if (color === "red" && special === "pencil") {
  console.log("I have a red pencil");
}

if (color === "blue" || special === "pencil") {
  console.log(
    "I might have a blue pencil, but I'm sure that it is either blue or a pencil"
  );
}

if (color !== "pink" && special !== "pen") {
  console.log("I don't have a pink pen");
}

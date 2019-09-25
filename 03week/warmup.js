number1 = 0;
number2 = 0;
number3 = 0;

function printnumbers() {
  for (i = 0; i <= 100; i++) {
    number1 = i;
    console.log(i);
  }
}

function printnumbers2() {
  for (i = 0; i <= 100; i++) {
    number2 = i;
    if (number2 % 2 == 0) {
      console.log(number2);
    }
  }
}

function printnumbers3() {
  for (i = 0; i <= 100; i++) {
    number3 = number3 + i;
    console.log(number3);
  }
}

console.log("This just prints out numbers 1 through 100");
printnumbers();
console.log("This prints out even numbers only from 1 through 100");
printnumbers2();
console.log("This prints out the sum of all numbers between 1 and 100");
printnumbers3();

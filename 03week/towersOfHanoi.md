Firstly the program runs the prompt function that prints out the stacks and inqures the user for an input.
The prompt asks request which stack to start and then which stack to move the furthest most number or 'ring' like in the actual game.
The stacks that are selected get stored into local variables called startStack and endStack.
These two variables are called into the constructor of the towersOfHanoi function.

The towersOfHanoi function takes in the startStack and endStack variables and immediately runs a if statement that tests the two variables.
The if statement takes startStack and endStack and runs them through the constructor of the isLegal function.

Weather the isLegal function runs true or false will determine weather or not the if statement runs.
When the if statement runs positive, it will run movePiece with startStack and endStack variables in its constructor.
Once movePiece runs then checkForWin will run to determine if the game is compelted.
If, the if statement in towersOfHanoi does not run, the else statement will run, and print out in the console that the move is illegal.
getPrompt will run again and the user will have to make another move that is legal and will run the functions in the towersOfHanoi if statement.

The isLegal takes advantage of local variables.
isLegal uses local variables start and end to store the values of endStack and startStack from the constructor.
startIndex and endIndex values are defined by stacks[start].length - 1; & stacks[end].length - 1; respectively.
The local variables startArray and endArray are defined by stacks[start][startindex]; && stacks[end][endindex];
Then an if statement is run which compares the values of of startArray and endArray.
Following the rules of the original Towers of Hanoi game if the value of the startArray is less than the value of endArray then the statement returns true indicating that the move is legal.
Otherwise a if else statement runs to test if endArray even has a value, to which if it doesn't and is effectively empty and can allow the player to make the move, then the if else statement returns true as well, allowing the player to move the piece.
If the if statement and the if else statement are unable to return true, then an else statement returns false in the isLegal function, indicating that the players move is illegal.

If the move is legal, then the if statement inf towersOfHanoi will pass the startStack and endStack variable into the movePiece function.
MovePiece also takes advantage of local variables to accomplish its tasks, similarly to isLegal.
TtartStack and endStack get stored into the local variables start and end.
The array startArray is defined stacks[start];
A local variable called move is defined by startArray.pop(); , taking the last value of startArray and storing it.
Lastly stacks[end].push(moved); is run to push into the array the value of move.
This effectively removes thast entry of the array selected from stacks and pushes into the next array of stacks, selected by the user.

After the pieces are moved checkForWin is runned to see if the last move the user has made beaten the game.
checkForWin has a locally declared array called winStack, and compares it specifically to stacks.b and stacks.c.
If all the values of stacks.b or stacks.c match up to winStack then that indicates that the user has successfully moved all the values from stacks.a to either stacks.b or stacks.c
This sends a message to the console delcaring the victory for the user,
and then resets game by reassiging all the values of stacks, to their original value.
The game effectively starts over and the program can be repeated.

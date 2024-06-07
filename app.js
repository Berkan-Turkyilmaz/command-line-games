const userMove = process.argv[2];
const moves = ["rock", "paper", "scissors"];

function createCompMove() {
  const randomMove = Math.floor(Math.random() * 3);
  return moves[randomMove];
}
// function
function WhoIsWinner(user, comp) {
  if (user === "rock" && comp === "scissors") {
    console.log("You ROCK crushes Computers Scissors. YOU WIN!");
  } else if (user === "paper" && comp === "rock") {
    console.log("You PAPER covers Computers ROCK. YOU WIN!");
  } else if (user === "scissors" && comp === "paper") {
    console.log("You SCISSORS cuts Computers PAPER. YOU WIN!");
  } else if (user === "rock" && comp === "paper") {
    console.log("You ROCK got covered by Computers PAPER. YOU LOSE!");
  } else if (user === "paper" && comp === "scissors") {
    console.log("You PAPER got CUT by Computers SCISSORS. YOU LOSE!");
  } else if (user === "scissors" && comp === "rock") {
    console.log("You SCISSORS got crushed by Computers ROCK. YOU LOSE!");
  } else if (user === comp) {
    console.log("You both Picked the same one! It is a DRAW!");
  }
}
const compMove = createCompMove();
WhoIsWinner(userMove, compMove); 

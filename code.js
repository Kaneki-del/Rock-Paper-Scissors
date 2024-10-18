function getComputerChoicee() {
    let random;
    random = Math.floor(Math.random() * 3);
    if (random === 0)
        return "Paper";
    else if (random == 1)
        return "Scissor";
    else
        return "Rock";
}

var Rock = document.querySelector(".Rock");
var Paper = document.querySelector(".Paper");
var Scissor = document.querySelector(".Scissor");function getComputerChoicee() {
    let random;
    random = Math.floor(Math.random() * 3);
    if (random === 0)
        return "Paper";
    else if (random == 1)
        return "Scissor";
    else
        return "Rock";
}

var humanScore = 0;
var computerScore = 0;
function playRound(HumanChoice) {
    var ComputerChoice = getComputerChoicee();
    let pc = "You lose! " + ComputerChoice + " beats " + HumanChoice;
    let human = "You win! " + HumanChoice + " beats " + ComputerChoice;

    if (ComputerChoice === HumanChoice) {
        result.innerHTML = "It's a draw! You both chose " + ComputerChoice;
    } else if (
        (ComputerChoice === "Paper" && HumanChoice === "Rock") || 
        (ComputerChoice === "Rock" && HumanChoice === "Scissor") || 
        (ComputerChoice === "Scissor" && HumanChoice === "Paper")
    ) {
        computerScore++;
        result.innerHTML = `${pc}: You have ${humanScore} points, and computer has ${computerScore} points.`;
    } else {
        humanScore++;
        result.innerHTML = `${human}: You have ${humanScore} points, and computer has ${computerScore} points.`;
    }
    if (humanScore === 5){
        result.innerHTML = "Congratulations! You are the winner! 🎉";
        resetGame();
    }else if ( computerScore === 5){
        result.innerHTML = "Sorry! The computer is the winner! 😢";
        resetGame();
    }"Sorry! The computer is the winner! 😢"
}
function resetGame(){
    humanScore = 0;
    computerScore = 0;
}

var Rock = document.querySelector(".Rock");
var Paper = document.querySelector(".Paper");
var Scissor = document.querySelector(".Scissor");
var result = document.querySelector(".result");


Rock.addEventListener("click", () => playRound("Rock"));
Paper.addEventListener("click", () => playRound("Paper"));
Scissor.addEventListener("click", () => playRound("Scissor"));

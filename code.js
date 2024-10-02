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

const formatChoice = (choice) => choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

function getHumanChoicee() {
    let choice = prompt("Choose: Rock, Paper, or Scissor"); // Get user input
    return formatChoice(choice); // Use the formatChoice function to format the input
}
let humanScore = 0;
let computerScore = 0;

function playRound(ComputerChoice, HumanChoice) {
    let pc = "You lose! " + ComputerChoice + " beats " + HumanChoice;
    let human = "You win! " + HumanChoice + " beats " + ComputerChoice;
    if (ComputerChoice === HumanChoice)
        console.log("It's a draw! you bouth chose " + ComputerChoice);
    else if (ComputerChoice === "Paper" && HumanChoice === "Rock") {
        console.log(pc);
        computerScore++;
    } else if (ComputerChoice === "Paper" && HumanChoice === "Scissor") {
        console.log(human);
        humanScore++;
    } else if (ComputerChoice === "Rock" && HumanChoice === "Paper") {
        console.log(human);
        humanScore++;
    } else if (ComputerChoice === "Rock" && HumanChoice === "Scissor") {
        console.log(pc);
        computerScore++;
    } else if (ComputerChoice === "Scissor" && HumanChoice === "Paper") {
        console.log(pc);
        computerScore++;
    } else if (ComputerChoice === "Scissor" && HumanChoice === "Rock") {
        console.log(human);
        humanScore++;
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoicee();
        const computerSelection = getComputerChoicee();
        playRound(computerSelection, humanSelection);
        i++;
    }
    if (humanScore === computerScore) {
        console.log("You have a draw");
    } else if (humanScore > computerScore) {
        console.log("You are the winner");
    } else
        console.log("The computer is the winner");
}
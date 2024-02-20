function computer() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(player, computer1) {
    if (player === computer1) {
        return `It's a tie! You and computer selected ${player}.`;
    } else if (player === "rock" && computer1 === "scissors") {
        return `You win! You selected ${player} and computer selected ${computer1}.`;
    } else if (player === "paper" && computer1 === "rock") {
        return `You win! You selected ${player} and computer selected ${computer1}.`;
    } else if (player === "scissors" && computer1 === "paper") {
        return `You win! You selected ${player} and computer selected ${computer1}.`;
    } else if (computer1 === 'scissors' && player === 'paper') {
        return `You lose! You selected ${player} and computer selected ${computer1}.`;
    } else if (computer1 === 'rock' && player === 'scissors') {
        return `You lose! You selected ${player} and computer selected ${computer1}.`;
    } else if (computer1 === 'paper' && player === 'rock') {
        return `You lose! You selected ${player} and computer selected ${computer1}.`;
    }
}

function playGame(player) {
    const computer1 = computer();
    const result = playRound(player, computer1);
    document.getElementById("result").innerText = result;
}
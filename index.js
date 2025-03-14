addEventListener("DOMContentLoaded", () => {

    const btnContainer = document.getElementById("buttonsContainer");
    const messages = document.getElementById("messages");
    const playerWins = document.getElementById("playerWins");
    const cpuWins = document.getElementById("cpuWins");
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorBtn = document.getElementById("scissorBtn");

    const moveList = ["rock", "paper", "scissor"];

    let playerPoints = 0;
    
    let cpuPoints = 0;

    function updateScore(winner) {
        if (winner === "cpu") {
            cpuPoints += 1;
            if (cpuPoints === 5) {
                messages.innerText = "Computer reached 5 points and is the winner. If you want to play again, pick a move."
                cpuPoints = 0;
                cpuWins.innerHTML = cpuPoints;
                playerPoints = 0;
                playerWins.innerHTML = playerPoints;
            } else {
                messages.innerText = "Computer wins"
                cpuWins.innerHTML = cpuPoints;
            }
        } else {
            playerPoints += 1;

            if (playerPoints === 5) {
                messages.innerText = "Player reached 5 points and is the winner. If you want to play again, pick a move."
                cpuPoints = 0;
                cpuWins.innerHTML = cpuPoints;
                playerPoints = 0;
                playerWins.innerHTML = playerPoints;
            } else {
                messages.innerText = "Player wins"
                playerWins.innerHTML = playerPoints;
            }
        }

    }
    
    function cpuMoveGenerator() {
        
        let randInt = Math.floor(Math.random() * moveList.length);
        return moveList[randInt];
    }

    function displayMove(playerMove, cpuMove) {
        
        const playerMoveImg = document.getElementById("player-move-img");
        const cpuMoveImg = document.getElementById("cpu-move-img");

        switch (playerMove) {

            case rockBtn:
                playerMoveImg.src = "./img/rock-img.svg";
                playerMove = "rock";
                break;

            case paperBtn:
                playerMoveImg.src = "./img/paper-img.svg"; 
                playerMove = "paper";
                break;

            case scissorBtn:
                playerMoveImg.src = "./img/scissor-img.svg";
                playerMove = "scissor";
                break;
            }

        switch (cpuMove) {

            case "rock":
                cpuMoveImg.src = "./img/rock-img.svg";
                break;

            case "paper":
                cpuMoveImg.src = "./img/paper-img.svg"; 
                break;

            case "scissor":
                cpuMoveImg.src = "./img/scissor-img.svg";
                break;
            }

        if (playerMove === cpuMove) {
            messages.innerText = "Draw";

        } else if ((playerMove === "rock" && cpuMove === "paper") 
                || (playerMove === "paper" && cpuMove === "scissor") 
                || (playerMove === "scissor" && cpuMove === "rock")) {
                    updateScore("cpu");
        
        } else {
            updateScore("player");
        } 

    }
    
    btnContainer.addEventListener("click", (event) => {
        
        let playerMove = event.target;

        const cpuMove = cpuMoveGenerator();
        
        displayMove(playerMove, cpuMove);
    })
})
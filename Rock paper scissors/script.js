let compscore = 0;
let playerscore = 0;
const rockbut = document.querySelector("#rock");
const paperbut = document.querySelector("#paper");
const scissorbut = document.querySelector("#scissor");
const comp = document.querySelector("#computerchoice");
const cs = document.querySelector("#computerscore");
const ps = document.querySelector("#playerscore");
const winner = document.querySelector("#winner");

function getcomputerchoice() {
    const list = ["rock","paper","scissor"];
    return list[Math.floor(Math.random() * 3)];
}
    
function playround(playerchoice,computerchoice) {
    winner.textContent = "Computer choice:"
    comp.textContent = computerchoice;
    if (playerchoice == "rock" && computerchoice == "paper") {
        compscore += 1;
        cs.textContent = compscore;
        gameend()
    } else if (playerchoice == "paper" && computerchoice == "scissor") {
        compscore += 1;
        cs.textContent = compscore;
        gameend();
    } else if (playerchoice == "scissor" && computerchoice == "rock") {
        compscore += 1;
        cs.textContent = compscore;
        gameend()
    } 
    else if (playerchoice ==  computerchoice ) {
    } 
    else {
        playerscore += 1;
        ps.textContent = playerscore;
        gameend()
        return "You win " + playerchoice +  " beats " + computerchoice;
    }
}

function gameend() {
    if (playerscore == 5) {
        playerscore = 0;
        compscore = 0;
        cs.textContent = "0";
        ps.textContent = "0";
        comp.textContent = "";
        winner.textContent = "Player Won!"
    }
    if (compscore == 5) {
        playerscore = 0;
        compscore = 0;
        cs.textContent = "0";
        ps.textContent = "0";
        comp.textContent = "";
        winner.textContent = "Computer Won!"
        
    } 
}

rockbut.addEventListener("click", function() {
    console.log(playround("rock", getcomputerchoice()));
});
paperbut.addEventListener("click", function() {
    console.log(playround("paper", getcomputerchoice()));
});
scissorbut.addEventListener("click", function() {
    console.log(playround("scissor", getcomputerchoice()));
});
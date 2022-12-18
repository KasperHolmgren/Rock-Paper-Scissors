const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Du valde: ${player}`;
    computerText.textContent = `Datorn valde: ${computer}`;
    resultText.textContent = checkWinner();
}));



function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Sten";
        break;
      case 2:
        computer = "Påse";
        break;
      case 3:
        computer = "Sax";
        break;
    }
}


function checkWinner(){
    if(player == computer){
      return "Oavgjort!";
    }
    else if(computer == "Sten"){
      return (player == "Påse") ? "Du!" : "Datorn!"
    }
    else if(computer == "Påse"){
      return (player == "Sax") ? "Du!" : "Datorn!"
    }
    else if(computer == "Sax"){
      return (player == "Sten") ? "Du!" : "Datorn!"
    }
}


document.getElementById("gameMode").style.display = "none";
document.getElementById("gameDiv").style.display = "none";
document.getElementById("finalPage").style.display = "none";



document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("gameMode").style.display = "block";
  document.getElementById("startScreen").style.display = "none";
});

document.getElementById("playerVsComputer").addEventListener("click", function() {
  document.getElementById("gameDiv").style.display = "block";
  document.getElementById("gameMode").style.display = "none";
});

document.querySelectorAll(".choiceBtn").forEach(function(button) {
  button.addEventListener("click", function() {
    document.getElementById("gameDiv").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
  });
});
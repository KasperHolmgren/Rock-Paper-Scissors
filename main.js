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
    playerText.textContent = `spelare: ${player}`;
    computerText.textContent = `Dator: ${computer}`;
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
      return (player == "Påse") ? "Du vann!" : "Du förlorade!"
    }
    else if(computer == "Påse"){
      return (player == "Sax") ? "Du vann!" : "Du förlorade!"
    }
    else if(computer == "Sax"){
      return (player == "Sten") ? "Du vann!" : "Du förlorade!"
    }
}


document.getElementById("gameMode").style.display = "none";
document.getElementById("gameDiv").style.display = "none";



document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("gameMode").style.display = "block";
  document.getElementById("startScreen").style.display = "none";
});

document.getElementById("gameMode").addEventListener("click", function() {
  document.getElementById("gameDiv").style.display = "block";
  document.getElementById("gameMode").style.display = "none";
});
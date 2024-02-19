//#region Game Logic

var fixedChoice;
var playerCounter=0;
var globalCounter=0;
var pcCounter=0;


function getRandomInt(){
    return Math.ceil(Math.random()*3);
}

const pcChoice = function(){
    let choice = getRandomInt();
    if(choice == 1){
        return "Rock";
    }
    if(choice == 2){
        return "Paper";
    }
    if(choice == 3){
        return "Scissors";
    }
}

function playRound(playerSelection, pcSelection){
    var x1 = playerSelection.toLowerCase();
    addPlayerPcChoice(playerSelection,pcSelection);

    if(pcSelection=="Scissors" && x1=="paper"){
        addOutcome("You Lose! "+pcSelection+" beats "+playerSelection);
        return 0;
    }
    else if(pcSelection=="Rock" && x1=="scissors"){
        addOutcome("You Lose! "+pcSelection+" beats "+playerSelection);
        return 0;
    }
    else if(pcSelection=="Paper" && x1=="rock"){
        addOutcome("You Lose! "+pcSelection+" beats "+playerSelection);
        return 0;
    }
    else if(pcSelection.toLowerCase()==x1){
        addOutcome("It's a draw! "+pcSelection+" it's the same as "+playerSelection);
        return 0;
    }
    else{
        addOutcome("You Win! "+playerSelection+" beats "+pcSelection);
        return 1;
    }

}

function playGameUI(playerSelection){
    fixedChoice = pcChoice();
    var isWin = playRound(playerSelection, fixedChoice );
    if(isWin == 1){
        playerCounter+=1;
        globalCounter+=1;
    }else{
        pcCounter+=1;
    }
    addResult();
}

//#endregion

//#region UIControl

const btnPaper = document.querySelector('#btnPaper');
const btnRock = document.querySelector("#btnRock");
const btnScissors = document.querySelector("#btnScissors");

const resultsContainer = document.querySelector('.container.results');
const choicesContainer = document.querySelector('.container.choices');

const outcome = document.createElement('h3');
const result = document.createElement('h3');
const resultPlayer = document.createElement('h3');
const resultPc = document.createElement('h3');
const playerH5 = document.createElement("h5");
const pcH5 = document.createElement("h5");

btnPaper.addEventListener('click', () => {
    playGameUI('Paper');
  });
btnRock.addEventListener('click',()=>{
    playGameUI('Rock');
})
btnScissors.addEventListener('click',()=>{
    playGameUI('Scissors');
})

function addPlayerPcChoice(player, pc){
    playerH5.classList.add('selection');
    pcH5.classList.add('selection');

    playerH5.textContent = "player choice: "+player;
    pcH5.textContent = "pc choice: "+pc;

    resultsContainer.appendChild(playerH5);
    resultsContainer.appendChild(pcH5);
}

function addOutcome(isWin){
    outcome.classList.add('outcome');
    outcome.textContent = isWin;
    resultsContainer.appendChild(outcome);


}

function addResult(){
    resultPlayer.classList.add('result');
    resultPlayer.textContent = "Player wins:" + playerCounter;
    resultsContainer.appendChild(resultPlayer);

    resultPc.classList.add('result');
    resultPc.textContent = "Pc wins:" + pcCounter;
    resultsContainer.appendChild(resultPc);

    if(playerCounter == 5){
        alert("el ganador es el jugador");
    }else if( pcCounter==5){
        alert("el ganador es la Pc");
    }
}



//#endregion

//#region Junk

//remove this basically
// function playGame(){
//     let result = 0;
    
//     for (let i = 0; i < 5; i++) {
//         var isWin = playRound(pcChoice(),pcChoice()); 
//         if(isWin.includes("Win")){
//             result++;
//         }
//     }
    
//     if(result >=3){
//         console.log("Player wins");
//     }else{ 
//         console.log("Computers wins");
//     }

// }
// playGame();





//#endregion



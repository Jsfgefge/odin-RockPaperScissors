function getRandomInt(){
    return Math.ceil(Math.random()*3);
}

var pcChoice = function(){
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
    if(pcSelection=="Scissors" && x1=="paper"){
        return "You Lose! "+pcSelection+" beats "+playerSelection;
    }
    else if(pcSelection=="Rock" && x1=="scissors"){
        return "You Lose! "+pcSelection+" beats "+playerSelection;
    }
    else if(pcSelection=="Paper" && x1=="rock"){
        return "You Lose! "+pcSelection+" beats "+playerSelection;
    }
    else if(pcSelection.toLowerCase()==x1){
        return "It's a draw! "+pcSelection+" it's the same as "+playerSelection;
    }
    else{
        return "You Win! "+playerSelection+" beats "+pcSelection;
    }

}

function playGameUI(playerSelection){
    var isWin = playRound(playerSelection, pcChoice());
    console.log(isWin);
}

const btnPaper = document.querySelector('#btnPaper');
const btnRock = document.querySelector("#btnRock");
const btnScissors = document.querySelector("#btnScissors");

btnPaper.addEventListener('click', () => {
    playGameUI('Paper');
  });
btnRock.addEventListener('click',()=>{
    playGameUI('Rock');
})
btnScissors.addEventListener('click',()=>{
    playGameUI('Scissors');
})






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






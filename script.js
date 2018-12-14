let rockbtn = document.querySelector(".rock");
let scissorsbtn = document.querySelector(".scissors");
let paperbtn = document.querySelector(".paper");
let wins = 0;
let losses = 0;
paperbtn.addEventListener('click',()=>{ playRound("paper",computerPlay())});
scissorsbtn.addEventListener('click',()=>{ playRound("scissors",computerPlay())});
rockbtn.addEventListener('click',()=>{ playRound("rock",computerPlay())});

let score = document.querySelector('.the_score');


function computerPlay(){
    let c = Math.floor(Math.random()*3);
    if(c==0){
        return "rock";

    }
    else if(c==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function playRound(playerSelection,computerSelection){
    if(wins == 5){
        score.textContent="You win!!!";
        return;
    }
    if(losses == 5){
        score.textContent="You lose :(";
        return;
    }
    
    if(playerSelection.toLowerCase() == "rock" & computerSelection == "paper"){
        losses++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        wins++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
        return "You tied";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        wins++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection== "scissors"){
        return "You Tied!";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        losses++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        wins++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
        return "You Tied!";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        losses++;
        score.textContent= 'Score: ' + wins + ': ' + losses;
        return "You Lose! Scissors beats Paper";
    }
}


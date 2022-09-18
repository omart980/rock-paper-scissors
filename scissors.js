function getComputerChoice(){
    var selection = ['Rock', 'Paper', 'Scissor'];
    var random_select = selection[Math.floor(Math.random()*selection.length)];
    //console.log(random_select);
    return random_select; // you need this to have this as string
}

function playRound(playerSelection, computerSelection){
    if( (playerSelection == "rock") && (computerSelection == "Paper")){
        return "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "paper") && (computerSelection == "Scissor")){
        return "You Lose! Scissors beats paper";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "Rock")){
        return "You Lose! Rock beats scissors";
    }
    //end of computer turn
    else if((playerSelection == "paper") && (computerSelection == "Rock")){
        return "You Win! Paper beats Rock";
    }
    else if((playerSelection == "scissors") && (computerSelection == "Paper")){
        return "You Win! Scissors beats paper";
    }
    else if ((playerSelection == "rock") && (computerSelection == "Scissor")){
        return "You Win! Rock beats scissors";
    }
    else {
        return "This is a tie!";
    }
}

var round_count = 0;
var my_count = 0;
var comp_count = 0;

function game(){
    for (let count = 0; count < 5; count++) {
        var player =  prompt("Rock, paper or scissors: ");  
        var comp = getComputerChoice(); // needed; re-loop this
        var rounds = playRound(player, comp);
        var str_contain = rounds.indexOf("Win!");

        if(str_contain > -1 ){
            my_count++;
        }
        else{
            comp_count++;
        }

        round_count++;
    }

    console.log("My score:" + my_count);
    console.log("Computer score:" + comp_count);
    console.log("Rounds:" + round_count);

    if(my_count > comp_count){
        console.log("You win!");
    }
    else{
        console.log("You loose!");
    }
}

let new_round = game();

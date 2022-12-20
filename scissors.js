var round_count = 0;
var my_count = 0;
var comp_count = 0;

document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
document.getElementById('player_score').innerHTML = "My Score: " + my_count;
document.getElementById('computer_score').innerHTML = "Computer Score: " + comp_count;

function getComputerChoice(){
    var selection = ['Computer: Rock', 'Computer: Paper', 'Computer: Scissors'];
    var random_select = selection[Math.floor(Math.random()*selection.length)];
    return random_select;
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if( (playerSelection == "player_rock") && (computerSelection == "Computer: Paper")){
        round_count++;
        comp_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('computer_score').innerHTML = "Computer Score: " + comp_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Computer point. Keep playing")
        }
    }
    else if((playerSelection == "player_paper") && (computerSelection == "Computer: Scissors")){
        round_count++;
        comp_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('computer_score').innerHTML = "Computer Score: " + comp_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Computer point. Keep playing")
        }
    }
    else if ((playerSelection == "player_scissors") && (computerSelection == "Computer: Rock")){
        round_count++;
        comp_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('computer_score').innerHTML = "Computer Score: " + comp_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Computer point. Keep playing")
        }
    }
    else if((playerSelection == "player_paper") && (computerSelection == "Computer: Rock")){
        round_count++;
        my_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + my_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else if((playerSelection == "player_scissors") && (computerSelection == "Computer: Paper")){
        round_count++;
        my_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + my_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else if ((playerSelection == "player_rock") && (computerSelection == "Computer: Scissors")){
        round_count++;
        my_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + my_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else {
        round_count++;
        console.log("A tie! No points")
    }
}

function game_start(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            var comp = getComputerChoice();
            var round = playRound(button.id, comp);
        });
    });
}

let new_round = game_start();

/*CHALLENGES TO ADD ON
- reset the game when rounds end
- Have an aniimation of who won after each round
- choosing rounds?
- Notify who picks what 
*/

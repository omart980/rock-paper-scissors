var round_count = 0;
var player_count = 0;
var comp_count = 0;
const final_result = document.querySelector(".end");

document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
document.getElementById('player_score').innerHTML = "My Score: " + player_count;
document.getElementById('computer_score').innerHTML = "Computer Score: " + comp_count;

gameStart();

function gameStart(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            var comp = getComputerChoice();
            var round = playRound(button.id, comp);
        });
    });
}

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
            game_end();
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
            game_end();
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
            game_end();
        }
        else{
            console.log("Computer point. Keep playing")
        }
    }
    else if((playerSelection == "player_paper") && (computerSelection == "Computer: Rock")){
        round_count++;
        player_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + player_count;
        if(player_count == 5){
            game_end();
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else if((playerSelection == "player_scissors") && (computerSelection == "Computer: Paper")){
        round_count++;
        player_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + player_count;
        if(player_count == 5){
            game_end();
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else if ((playerSelection == "player_rock") && (computerSelection == "Computer: Scissors")){
        round_count++;
        player_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player_score').innerHTML = "My Score: " + player_count;
        if(player_count == 5){
            game_end();
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else {
        round_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(player_count == 5 || comp_count == 5 ){
            game_end();
        }
        else{
            console.log("A tie! No points")
        }
    }
}

function game_end(){
    if(player_count == 5){
        final_result.innerHTML='Game over, you win! <button onclick="newGame()">Click here to play again</button>';
    }
    else{
        final_result.innerHTML='Game over, you lost! <button onclick="newGame()">Click here to play again</button>';
    }
    player_rock.setAttribute("disabled", 1);
    player_paper.setAttribute("disabled", 1);
    player_scissors.setAttribute("disabled", 1);
}

function newGame(){
    var new_round_count = 0;
    var new_player_count = 0;
    var new_comp_count = 0;

    document.getElementById('rounds').innerHTML = "Round Count: " + new_round_count;
    document.getElementById('player_score').innerHTML = "My Score: " + new_player_count;
    document.getElementById('computer_score').innerHTML = "Computer Score: " + new_comp_count;
 
    final_result.innerHTML = ``;
    player_rock.removeAttribute("disabled");
    player_paper.removeAttribute("disabled");
    player_scissors.removeAttribute("disabled");
}



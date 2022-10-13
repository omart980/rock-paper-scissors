/*Comp. generates random select.
*/
function getComputerChoice(){
    var selection = ['Rock', 'Paper', 'Scissor'];
    var random_select = selection[Math.floor(Math.random()*selection.length)];
    //console.log(random_select);
    return random_select; // you need this to have this as string
    //random comment
}
var round_count = 0;
var my_count = 0;
var comp_count = 0;
document.getElementById('player').innerHTML = "My Score: " + my_count;
document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
document.getElementById('rounds').innerHTML = "Round Count: " + round_count;

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if( (playerSelection == "rock") && (computerSelection == "Paper")){
        round_count++;
        comp_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Keep playing")
        }
    }
    else if((playerSelection == "paper") && (computerSelection == "Scissor")){
        round_count++;
        comp_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Keep playing")
        }
    }
    else if ((playerSelection == "scissor") && (computerSelection == "Rock")){
        round_count++;
        comp_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Keep playing")
        }
    }
    //end of computer turn
    else if((playerSelection == "paper") && (computerSelection == "Rock")){
        round_count++;
        my_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Keep playing")
        }
    }
    else if((playerSelection == "scissor") && (computerSelection == "Paper")){
        round_count++;
        my_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Keep playing")
        }
    }
    else if ((playerSelection == "rock") && (computerSelection == "Scissor")){
        round_count++;
        my_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Keep playing")
        }
    }
    else {
        round_count++;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        return "This is a tie! No points and try again";
        
    }
    
}

function game_start(){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
        var comp = getComputerChoice();
        var round = playRound(button.id, comp);
        });
    });
}

let new_round = game_start();
var round_count = 0;
var my_count = 0;
var comp_count = 0;

document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
document.getElementById('player').innerHTML = "My Score: " + my_count;
document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;


/*Comp. generates random select.
*/
function getComputerChoice(){
    var selection = ['Computer: Rock', 'Computer: Paper', 'Computer: Scissors'];
    var random_select = selection[Math.floor(Math.random()*selection.length)];
    return random_select; // you need this to have this as string
}

/*Plays rounds with player vs computer; keeps track*/
function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if( (playerSelection == "player_rock") && (computerSelection == "Computer: Paper")){
        round_count++;
        comp_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
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
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
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
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        if(comp_count == 5){
            alert("You lost against the computer!");
        }
        else{
            console.log("Computer point. Keep playing")
        }
    }
    //end of computer turn
    else if((playerSelection == "player_paper") && (computerSelection == "Computer: Rock")){
        round_count++;
        my_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
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
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
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
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        if(my_count == 5){
            alert("YOU WON!");
        }
        else{
            console.log("Player point. Keep playing")
        }
    }
    else {
        round_count++;
        document.getElementById('rounds').innerHTML = "Round Count: " + round_count;
        document.getElementById('player').innerHTML = "My Score: " + my_count;
        document.getElementById('computer').innerHTML = "Computer Score: " + comp_count;
        console.log("A tie! No points")
       //return "This is a tie! No points and try again";
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

/// thigs to check: the logic foor the clicking,
// edit css, 
// make more nicer comments, 
//and some effects for the consoloe log
var choice
var compSelect
var options = ["R", "P", "S"]
var tie = 0
var loss = 0
var win = 0

function displayCompChoice(){
    alert("You selected " + choice + ". The computer chose " + compSelect + ".")
}

function youWon(){
    win++;
    displayCompChoice();
    alert("You won!");
    playAgain();
}

function youLost(){
    loss++;
    displayCompChoice();
    alert("You lost!");
    playAgain();
}

function weTied(){
    tie++;
    displayCompChoice();
    alert("It's a tie!");
    playAgain();
}

function playAgain(){
    alert("Current score:\nWins: " + win +"\nLosses: " + loss + "\nTies: " + tie)
    var again = confirm("Would you like to play again?")
    if (again == true) {
        RPS();
}   else {return};
}

function RPS(){
choice = prompt("Please type R, P, or S.")
compSelect = options[Math.floor(Math.random()* options.length)]
    
    if (choice == compSelect){
    weTied();

}   else if (choice == "R" && compSelect == "S"){
    youWon();

}   else if (choice == "R" && compSelect == "P"){
    youLost();

}   else if (choice == "P" && compSelect == "R"){
    youWon();

}   else if (choice == "P" && compSelect == "S"){
    youLost();

}   else if (choice == "S" && compSelect == "P"){
    youWon();

}   else if (choice == "S" && compSelect == "R"){
    youLost();

}

}
RPS();
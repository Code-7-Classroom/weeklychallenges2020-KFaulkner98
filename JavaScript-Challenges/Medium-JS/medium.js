var userInput = prompt("Did you have something to say?");

if (userInput === userInput.toUpperCase()) {
    console.log("The user is shouting!");
}

else if (userInput === userInput.toLowerCase()) {
    console.log("The user is whispering.")
}

else{
    console.log("The user is talking normally")
}
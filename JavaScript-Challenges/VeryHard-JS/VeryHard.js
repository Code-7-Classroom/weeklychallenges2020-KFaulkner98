// Prompt asks for first nummber
var Number1 = prompt("Enter a Number");
// Prompt asks for an operation
var Operation = prompt("Enter an Operation");
// Prompt asks for second number
var Number2 = prompt("Enter another Number");

// Targets addition, and solves problem
switch(Operation.toString()){
    case '+':
        console.log(Number1 + " + " + Number2 + " = " + (parseInt(Number1) + parseInt(Number2)));
        break;
}

// Targets subtraction, and solves problem
switch(Operation.toString()){
    case '-':
        console.log(Number1 + " - " + Number2 + " = " + (parseInt(Number1) - parseInt(Number2)));
        break;
}

// Targets multiplication, and solves problem
switch(Operation.toString()){
    case '*':
        console.log(Number1 + "*" + Number2 + " = " + (parseInt(Number1) * parseInt(Number2)));
        break;
}

// Targets division, and solves problem
switch(Operation.toString()){
    case '/':
        console.log(Number1 + " / " + Number2 + " = " + (parseInt(Number1) / parseInt(Number2)));
        break;
}
// Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. 
//Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
let red = document.getElementsByClassName(".btn1")
let blue = document.getElementsByClassName(".btn2")

// function bkgRed()
// {   
// document.body.style.backgroundColor= "red";
// }

// function bkgBlue()
// {   
// document.body.style.backgroundColor= "blue";
// }

function changeColor(color){
    if (color === 'red'){
        document.body.style.backgroundColor="red"
    } else if (color === 'blue'){
        document.body.style.backgroundColor="blue"
    }
}
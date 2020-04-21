//MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((a, b) => a += b);
let avg = sum / values.length;

console.log(avg);




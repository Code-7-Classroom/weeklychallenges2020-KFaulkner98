var input = parseInt(prompt('Please enter a number 1-12'));
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

if (input< 1 || input > 12) {
    alert('Not a valid number');
} else {
    console.log(months[input - 1]);
}
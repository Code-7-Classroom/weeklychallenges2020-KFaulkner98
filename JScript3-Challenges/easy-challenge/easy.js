// // Easy Challenge
function exercise(userQuestion) {
    return function() {
        return "Today's exercise: " + userQuestion;
    }
}

var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"


// MEDIUM CHALLENGE

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays and use the Resources provided at the end of the lesson to practice to aid in working through this problem. 


var arr = [1, 2, 5, 8, 4, 7];
var target = 5;

function medIndex(arr, target) {
    //check if element exist in array
    if ( arr.indexOf(target) != -1) {
        return arr.indexOf(target);
    } else {
        return -1;
    }
};

//console.log(arr.indexOf(8));
console.log(medIndex(arr, target)); 
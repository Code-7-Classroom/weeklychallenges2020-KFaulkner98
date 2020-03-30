var massTom = 8; //lb
var heightTom = 9; //in

var massJerry = 45; //cm
var heightJerry = 10; //g

var BMITom = massTom / (heightTom * heightTom);
var BMIJerry = massJerry / (heightJerry * heightJerry);

var tomHigherBMI = BMITom > BMIJerry;

console.log("Is Tom's BMI higher than Jerry's?");
console.log(BMITom > BMIJerry);
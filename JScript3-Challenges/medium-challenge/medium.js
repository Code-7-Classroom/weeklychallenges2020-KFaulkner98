// Medium Challenge

function cutPizzaSlices(slices){
    return function(people){
        var pizza= slices/people;
        return "each person gets "+ pizza.toFixed(2) + " slices of pizza."
    } 
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

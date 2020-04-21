function singleChar(str){
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
            console.log(str.charAt(i));
            break;
        }
    }
}

singleChar("the quick brown fox jumps over the clam kitten quietly");
singleChar("this hat is the greatest!");
singleChar("what a wonderful day it has been");
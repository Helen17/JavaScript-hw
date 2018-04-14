function reverse_num(number){
    var str = number + ""; //number into string
    var newString = ""; //new empy string
    for(var i = str.length-1; i >= 0; i--){
        newString += str[i]; //from end to start into newString added numbers
    }
    return +newString; // string into number
}

console.log(reverse_num(32243));


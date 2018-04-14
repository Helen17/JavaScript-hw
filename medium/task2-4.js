function upper(str) {
    var newStr = str.replace(str[0], str[0].toUpperCase());    
    for(var i = 1; i < str.length; i++) {
        if(str[i] === " ") {
            newStr = newStr.replace(newStr[i+1], newStr[i+1].toUpperCase());
        }
    }
    return newStr;
}
 

console.log("method 1: " + upper("the quick brown fox"));


//OR

function upper2(str){
    var result = str[0].toUpperCase();
    for(var i = 1; i < str.length; i++){
        result += str[i];
        if(str[i] === " "){
            result += str[i+1].toUpperCase();
            i=i+1;
        }
    }
    return result;
}

console.log("method 2: " + upper2("the quick brown fox"));


//OR

var words = "the quick brown fox".split(" "); // ["the", "quick", "brown", "fox"]
var result = words.map(function(item) { 
    return item[0].toUpperCase() + item.slice(1); // "the" -> "t".toUpperCase() + "ello" = "Hello"
});
var resString = result.join(" "); // ["The", "Quick", "Brown", "Fox"] -> "The Quick Brown Fox"
 console.log("method 3: " + resString);




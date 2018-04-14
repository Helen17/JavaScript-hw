function pythagorean(a,b){
    var square = a*a + b*b;
    var c = Math.sqrt(square);
    return c;
}

var a = prompt("Please enter a:");
var b = prompt("Please enter b:");

alert('Result is: ' + pythagorean(a,b));




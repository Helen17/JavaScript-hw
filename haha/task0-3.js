document.getElementById("start").addEventListener("click", function(){
function convert(cel){
    var far = cel*1.8+32;
    return far;
}

var cel = prompt('Enter temperature in celsius:');

alert('Your temperature in fahrenheit is: ' + convert(cel));
});

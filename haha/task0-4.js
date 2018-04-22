document.getElementById("start").addEventListener("click", function(){
var name = prompt("Enter your name","Petro");
var city = prompt("Enter your city","Milan");
var date = prompt("Enter date of meeting","17:00");

alert(name + " has a meeting at " + date + " somewhere in " + city + " .");
});

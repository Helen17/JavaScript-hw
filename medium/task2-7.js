function random(max, min){
   var rand = Math.floor(Math.random()*max) + min;
   return rand;
}

console.log(random(20,1));

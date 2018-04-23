function recursion(n,o){
    if (n>=o){
       console.log(n);
       recursion(n - 1,o);
    }
}

console.log("from 20 to 10");
recursion(20,10);

function recursion(N,o){
    if (N>=o){
       console.log(N);
       recursion(N - 1,o);
    }
}

console.log("from 20 to 10");
recursion(20,10);
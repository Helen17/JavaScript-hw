function recursion(N,O){
    if (N>=O){
       console.log(N);
       recursion(N - 1,O);
    }
}

console.log("from 20 to 10");
recursion(20,10);

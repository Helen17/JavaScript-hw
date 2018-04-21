function avg(arr){
    var sum = 0;
    var avarage = 0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avarage = sum/arr.length;
    return avarage;
}

console.log("Avarage num: "+ avg([1,4,2]).toFixed(2));

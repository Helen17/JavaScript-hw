function pairNum(arr){
    var result = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(pairNum([1,5,23,4,2,5,6]));
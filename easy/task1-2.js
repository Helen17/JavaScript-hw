function min_max(arr){
    var max = arr[0];
    var min = arr[0];   
    for(i=0; i<arr.length;i++){
        if (arr[i] > max){
            max = arr[i];          
        }
        if (arr[i] < min){
            min = arr[i];           
        }
    }
    return {max:max, min:min};
}


console.log(min_max([1,92,-5,25]));
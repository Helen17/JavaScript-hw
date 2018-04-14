var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("not sorted: " + arr);

function bubble_sorting(arr){
    var swapping;
    do {
        swapping = false;
        for (var i=0; i < arr.length-1; i++){
            if (arr[i] < arr[i+1]){
               var bubble = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = bubble;
               swapping = true;
            }
        }
    } while (swapping);
 return arr; 
}

console.log("sorted: " + bubble_sorting(arr));


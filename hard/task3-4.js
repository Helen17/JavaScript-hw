var array = [ 5, 5, 5, 5, 5, 5];
console.log("array: " + array);

var sorted_array = array.sort(); 

var results = [];

function duplicate(array){
    for (var i = 0; i < array.length - 1; i++) {
        if (sorted_array[i + 1] == sorted_array[i]) {
             if(!(results.includes(sorted_array[i]))){
                    results.push(sorted_array[i]);
                }
        }
    }
    return results;
}

console.log("duplicate values: " + duplicate(array));

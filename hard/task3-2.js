function validate(arr,obj){
   for(var i=0; i<arr.length; i++){
       var key = arr[i]; 
           if(!(obj.hasOwnProperty(key))) {            
                throw new Error("'age' wasn't passed on object");
           } 
       }
       return true;
    }


console.log(validate(["name","surname"],{name:"Roman",surname:"Rodomansky"}));
console.log(validate(["name","surname","age"],{name:"Roman",surname:"Rodomansky"}));



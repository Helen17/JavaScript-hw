function validate(arr,obj){
   for(var i=0; i<arr.length; i++){
       var key = arr[i]; 
           if(!(obj.hasOwnProperty(key))) {            
                throw new Error(key + " wasn't passed on object");
           } 
       }
       return true;
    }

try{
   console.log(validate(["name","surname"],{name:"Roman",surname:"Rodomansky"}));
}
catch(error){
   console.log(error.message);
}

try{
   console.log(validate(["name","surname","age"],{name:"Roman",surname:"Rodomansky"}));
}
catch(error){
   console.log(error.message);
}

